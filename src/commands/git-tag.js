const { execCommands } = require('../utils');

const gitTag = (name) => {
  const date = new Date().toISOString().replace(/\.\d{3}/g, '');

  const dateForName = date.replace('T', '__').replace(/:/g, '-'); // 2020-02-04__00-00-00Z
  const dateForMessage = date.replace('T', ' '); // 2020-02-04 00:00:00Z

  const tagName = `${name}--${dateForName}`;
  const tagMessage = `Release: ${name} at ${dateForMessage}`;

  execCommands([`git tag -a ${tagName} -m "${tagMessage}"`, `git push origin ${tagName}`]);
};

module.exports = gitTag;
