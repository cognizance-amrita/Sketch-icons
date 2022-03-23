// const codepoints = require('./dist/cdn/sketch-icons.json');

module.exports = {
  inputDir: './assets', // (required)
  outputDir: './dist/cdn', // (required)
  fontTypes: ['woff2', 'woff'],
  assetTypes: ['css', 'scss', 'json', 'html'],
  name: 'sketch-icons',
  // codepoints: codepoints,
  prefix: 'sk',
  selector: '.sk',
  fontsUrl: '',
  formatOptions: {
    json: {
      indent: 2
    }
  },
  // Use a custom Handlebars template
  templates: {
    css: './scripts/font/css.hbs',
    scss: './scripts/font/scss.hbs',
    html: './scripts/font/html.hbs'
  },
  pathOptions: {
    json: './dist/cdn/sketch-icons.json',
    css: './dist/cdn/sketch-icons.css',
    scss: './dist/cdn/sketch-icons.scss',
    html: './dist/cdn/index.html',
    ttf: './dist/cdn/sketch-icons.ttf',
    woff: './dist/cdn/sketch-icons.woff',
    woff2: './dist/cdn/sketch-icons.woff2',
    eot: './dist/cdn/sketch-icons.eot'
  }
};
