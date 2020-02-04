const { execCommands } = require('../utils');

const createTagInfoWithTimestamp = (name) => {
  const date = new Date().toISOString().replace(/\.\d{3}/g, '');

  const dateForName = date.replace('T', '__').replace(/:/g, '-'); // 2020-02-04__00-00-00Z
  const dateForMessage = date.replace('T', ' '); // 2020-02-04 00:00:00Z

  const tagName = `${name}--${dateForName}`;
  const tagMessage = `Release: ${name} at ${dateForMessage}`;

  return { tagName, tagMessage };
};

const createTagInfoWithVersion = (version) => {
  const tagName = `v${version}`;
  const tagMessage = `Release ${tagName}`;

  return { tagName, tagMessage };
};

const createTagInfo = (cmdObj) => {
  if (typeof cmdObj.name === 'string') {
    return createTagInfoWithTimestamp(cmdObj.name);
  }

  if (typeof cmdObj.version === 'string') {
    return createTagInfoWithVersion(cmdObj.version);
  }

  console.log('💥 Select any option');
  process.exit(0);
};

const gitTag = (cmdObj) => {
  const { tagName, tagMessage } = createTagInfo(cmdObj);

  execCommands([`git tag -a ${tagName} -m "${tagMessage}"`, `git push origin ${tagName}`]);
};

module.exports = gitTag;
