const fse = require('fs-extra');
const sass = require('sass');

const DEFAULT_SASS_PATH = './fonts/scss/default/main.scss';
const UNTITLED_UI_SASS_PATH = './fonts/scss/untitled-ui/main.scss';

const { css: bundle } = sass.compile(DEFAULT_SASS_PATH);
const { css: compressed } = sass.compile(DEFAULT_SASS_PATH, {
  style: 'compressed',
});

const { css: untitledUiBundle } = sass.compile(UNTITLED_UI_SASS_PATH);

const { css: untitledUiCompressed } = sass.compile(UNTITLED_UI_SASS_PATH, {
  style: 'compressed',
});

fse.writeFileSync('./fonts/inticons.bundle.css', bundle);
fse.writeFileSync('./fonts/inticons.bundle.min.css', compressed);

fse.writeFileSync('./fonts/inticons.untitled-ui.bundle.css', untitledUiBundle);
fse.writeFileSync(
  './fonts/inticons.untitled-ui.bundle.min.css',
  untitledUiCompressed
);
