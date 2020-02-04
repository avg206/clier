#!/usr/bin/env node

const version = require('../package.json').version;

const cli = require('commander')
  .version(version)
  .parse(process.argv);

console.log(cli);
