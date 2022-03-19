
  
const fs = require('fs/promises');
const rimraf = require('rimraf');
const svgr = require('@svgr/core').default;
const camelcase = require('camelcase');
const babel = require('@babel/core');
const { minify } = require('terser');

const outputPath = './dist';

async function transformSVGtoJSX(file, componentName, format) {
  try {
  const content = await fs.readFile(`./main/${file}`, 'utf-8');
  const svgReactContent = await svgr(
    content,
    {
      icon: false,
      replaceAttrValues: { '#2A2238': "{props.color || '#2A2238'}" },
      svgProps: {
        width: 32,
        height: 32,
        strokeWidth : { "1.5": "{props.strokeWidth || 1.5 }" },
        stroke : { "#2A2238": "{props.stroke || #2A2238 }" },
      },
    },
    { componentName }
  );
  const { code } = await babel.transformAsync(svgReactContent, {
    presets: [['@babel/preset-react', { useBuiltIns: true }]],
  });

  if (format === 'esm') {
    const { code: minifiedCode } = await minify(code);
    return minifiedCode;
  }

  const replaceESM = code
    .replace(
      'import * as React from "react";',
      'const React = require("react");'
    )
    .replace('export default', 'module.exports =');
  const { code: minifiedCode } = await minify(replaceESM);
  return minifiedCode;
    }
    catch (error) {
      console.error(error);
    }
}

function indexFileContent(files, format, includeExtension = true) {
  let content = '';
  const extension = includeExtension ? '.js' : '';
  files.map((fileName) => {
    const componentName = `${camelcase(fileName.replace(/.svg/, ''), {
      pascalCase: true,
    })}`;
    const directoryString = `'./icons/${componentName}${extension}'`;
    content +=
      format === 'esm'
        ? `export { default as ${componentName} } from ${directoryString};\n`
        : `module.exports.${componentName} = require(${directoryString});\n`;
  });
  return content;
}

async function buildIcons(format = 'cjs') {
    outDir = `${outputPath}/icons`;
    indexDir = `${outputPath}/`;

  await fs.mkdir(outDir, { recursive: true });

  const files = await fs.readdir('./main', 'utf-8');

  await Promise.all(
    files.flatMap(async (fileName) => {
      const componentName = `${camelcase(fileName.replace(/.svg/, ''), {
        pascalCase: true,
      })}`;
      const content = await transformSVGtoJSX(fileName, componentName, format);
      const types = `import * as React from 'react';\ndeclare function ${componentName}(props: React.SVGProps<SVGSVGElement>): JSX.Element;\nexport default ${componentName};\n`;

      console.log(`Creating file: ${componentName}.js`);
      await fs.writeFile(`${outDir}/${componentName}.js`, content, 'utf-8');
      // await fs.writeFile(`${outDir}/${componentName}.d.ts`, types, 'utf-8');
    })
  );

  console.log('📄 Creating file: index.js in ' , indexDir); 
  await fs.writeFile(
    `${indexDir}/index.js`,
    indexFileContent(files, format),
    'utf-8'
  );
  await fs.writeFile(
    `${indexDir}/index.d.ts`,
    indexFileContent(files, 'esm', false),
    'utf-8'
  );
}

(function main() {
  console.log('🏭 Building icon package...');
  new Promise((resolve) => {
    rimraf(`${outputPath}/*`, resolve);
  })
    .then(() => Promise.all([buildIcons('cjs')]))
    .then(() => console.log('👍 Finished building package.'));
})();