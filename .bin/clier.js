#!/usr/bin/env node

const version = require('../package.json').version;
const cli = require('commander');
const commands = require('../src/commands');

cli.version(version);

// GIT TAG Command
cli
  .command('git-tag <name>')
  .description('Create new git tag with given name and push it to origin')
  .action(commands.gitTag);

cli.parse(process.argv);
