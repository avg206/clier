const exec = require('child_process').execSync;

const execCommands = (commands = []) => {
  commands.forEach((command) => {
    console.log('🌱', command);
    exec(command, { stdio: ['ignore', 'ignore', 'pipe'] });
  });
};

module.exports = {
  execCommands,
};
