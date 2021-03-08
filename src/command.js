#!/usr/bin/env node

const program = require("commander");
const pkg = require("../package.json");

program
  .version(pkg.version)
  .arguments("<command>")
  .action(command => console.log(command))
  .parse(process.argv);
