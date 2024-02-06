const fse = require('fs-extra');
const { version } = require('../package.json');

(() => {
  const docsPath = './docs';
  const assetsPath = `${docsPath}/src/assets`;

  fse.copy('./README.md', `${assetsPath}/README.md`);
  fse.copy('./fonts', `${assetsPath}/fonts`);
  fse.copy('./fonts', `${docsPath}/public`);
  fse.copy('./fonts', `${docsPath}/public/${version}`);
})();
