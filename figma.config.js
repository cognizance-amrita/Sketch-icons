// figma.config.js
require("dotenv").config();
const svgo = require('@figma-export/transform-svg-with-svgo')

const fileId = process.env.FILE_ID;
const outputters = [
  require("@figma-export/output-components-as-svg")({ output: "./" })
];

/** @type {import('svgo').PluginConfig[]} */
const solidSVGOConfig = [
  { removeDimensions: true },
  { sortAttrs: true },
  { removeAttrs: { attrs: "fill" } },
  { addAttributesToSVGElement: { attribute: { fill: "currentColor" } } },
];

/** @type {import('svgo').PluginConfig[]} */
const outlineSVGOConfig = [
  { removeDimensions: true },
  { sortAttrs: true },
  { removeAttrs: { attrs: "stroke" } },
  { addAttributesToSVGElement: { attribute: { stroke: "currentColor" } } },
];

/** @type {import('@figma-export/types').FigmaExportRC} */
module.exports = {
  commands: [
    ["components", {
        fileId,
        onlyFromPages: ["solid"],
        transformers: [svgo({ multipass: true, plugins: solidSVGOConfig })],
        outputters,
      },
    ],
    ["components", {
        fileId,
        onlyFromPages: ["outline"],
        transformers: [svgo({ multipass: true, plugins: outlineSVGOConfig })],
        outputters,
      },
    ],
  ],
};