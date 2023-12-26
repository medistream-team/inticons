const fse = require('fs-extra');

(() => {
  const docsPath = './docs';
  const assetsPath = `${docsPath}/src/assets`;

  fse.copy('./README.md', `${assetsPath}/README.md`);
  fse.copy('./fonts', `${assetsPath}/fonts`);
  fse.copy('./fonts', `${docsPath}/public`);
})();
