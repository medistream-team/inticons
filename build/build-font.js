const fse = require('fs-extra');
const sass = require('sass');

const { css: bundle } = sass.compile('./fonts/scss/main.scss');
const { css: compressed } = sass.compile('./fonts/scss/main.scss', {
  style: 'compressed',
});

fse.writeFileSync('./fonts/inticons.bundle.css', bundle);
fse.writeFileSync('./fonts/inticons.bundle.min.css', compressed);
