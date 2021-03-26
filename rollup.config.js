const pkg = require("./package.json");
const fs = require("fs-extra");
const typescript = require("rollup-plugin-typescript2");
const { kebabToPascal } = require("naming-convention-transfer");

const input = "src/index.ts";

function createConfig({ pkg, input, format, file }) {
  return {
    input,
    output: {
      file,
      format,
      exports: "auto",
      name: kebabToPascal(pkg.name),
    },
    plugins: [typescript()],
  };
}

fs.emptyDirSync("./dist");

module.exports = [
  createConfig({ pkg, input, format: "cjs", file: pkg.main }),
  createConfig({ pkg, input, format: "esm", file: pkg.module }),
];
