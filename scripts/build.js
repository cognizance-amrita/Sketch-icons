const fs = require('fs/promises');
const rimraf = require('rimraf');
const svgr = require('@svgr/core').default;
const camelcase = require('camelcase');
const babel = require('@babel/core');
const { minify } = require('terser');

const outputPath = './dist';

async function transformSVGtoJSX(file, componentName, format) {
  try {
  const content = await fs.readFile(`./main/simple/${file}`, 'utf-8');
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


async function transformColorSVGtoJSX(file, componentName, format) {
  try {
  const content = await fs.readFile(`./main/color/${file}`, 'utf-8');
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
    outDir = `${outputPath}/simple/icons`;
    indexDir = `${outputPath}/simple`;

  await fs.mkdir(outDir, { recursive: true });

  const files = await fs.readdir('./main/simple', 'utf-8');
  console.log("-------------",files);

  let jsonData = [];

  await Promise.all(
    files.flatMap(async (fileName) => {
      jsonData.push({ "name" : fileName.replace(/.svg/, '')});
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

  console.log('📄 writing json data' ,indexDir); 
  await fs.writeFile(`${indexDir}/index.json`, JSON.stringify(jsonData), 'utf-8');

  console.log('📄 Creating file for simple icons : index.js in ' , indexDir); 
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

  cdnDir = `${outputPath}/cdn`;
  try {
    await fs.mkdir(cdnDir);
    console.log('📁 Created folder: cdn ' , cdnDir);
  }
  catch (error) { 
    console.log('cdn dir already exists'); 
    console.log('❌ Failed to create folder: cdn ' , cdnDir);
}

}


function allFileContent(files, format, includeExtension = true) {
  let content = '';
  const extension = includeExtension ? '.js' : '';
  // files.map((fileName) => {
  //   const componentName = `${camelcase(fileName.replace(/.svg/, ''), {
  //     pascalCase: true,
  //   })}`;
  //   const directoryString = `'./${componentName}${extension}'`;
  //   content +=
  //     format === 'esm'
  //       ? `export * from ${directoryString};\n`
  //       : `module.exports.${componentName} = require(${directoryString});\n`;
  // });
     content +=
      format === 'esm'
        ? `export * from './color/index.js';\nexport * from './simple/index.js';`
        : `module.exports = require('./simple/index.js');\nmodule.exports = require('./color/index.js');`;
 
  return content;
} 

async function buildColorIcons(format = 'cjs') {
  outDir = `${outputPath}/color/icons`;
  indexDir = `${outputPath}/color`; 

  await fs.mkdir(outDir, { recursive: true }); 
  const files = await fs.readdir('./main/color', 'utf-8');

  console.log("-------------",files);
  let jsonData = [];
  await Promise.all(
    files.flatMap(async (fileName) => {
      jsonData.push({ "name" : fileName.replace(/.svg/, '')});
      const componentName = `${camelcase(fileName.replace(/.svg/, ''), {
        pascalCase: true,
      })}`;
      const content = await transformColorSVGtoJSX(fileName, componentName, format);
      const types = `import * as React from 'react';\ndeclare function ${componentName}(props: React.SVGProps<SVGSVGElement>): JSX.Element;\nexport default ${componentName};\n`;

      console.log(`Creating file: ${componentName}.js`);
      await fs.writeFile(`${outDir}/${componentName}.js`, content, 'utf-8');
      // await fs.writeFile(`${outDir}/${componentName}.d.ts`, types, 'utf-8');
    })     
  );
  console.log('📄 writing json data' ,indexDir); 
  await fs.writeFile(`${indexDir}/index.json`, JSON.stringify(jsonData), 'utf-8');
  console.log('📄 Creating file for color icons : index.js in ' , indexDir); 
  
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

    mainDir = `${outputPath}/`;

    console.log('📄 Creating main file for all icons : index.js in ' , mainDir); 
    await fs.writeFile(
      `${mainDir}/all.js`,
      allFileContent(files, format),
      'utf-8'
    );
    await fs.writeFile(
      `${mainDir}/all.d.ts`,
      allFileContent(files, 'esm', false),
      'utf-8'
    );
      
  
}

(function main() {
  console.log('🏭 Building icon package...');
  new Promise((resolve) => {
    rimraf(`${outputPath}/*`, resolve);
  })
    .then(() => Promise.all([buildIcons('cjs')]))
    .then(() => Promise.all([buildColorIcons('cjs')]))
    .then(() => console.log('🎉  Icon package built successfully!'));
})();
