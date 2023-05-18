const fse = require('fs-extra');

(() => {
  const assetsPath = './docs/src/assets';

  fse.copy('./README.md', `${assetsPath}/README.md`);
  fse.copy('./fonts', `${assetsPath}/fonts`);
})();
