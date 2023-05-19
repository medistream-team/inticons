const fs = require('fs');
const path = require('path');
const svgpath = require('svgpath');
const { optimize } = require('svgo');

const WRITE_FILE_PATH = './fonts/config.json';
const DEFAULT_SVGS_PATH = './icons/default';

const UNTITLED_UI_WRITE_FILE_PATH = './fonts/untitled-ui-config.json';
const UNTITLED_UI_SVGS_PATH = './icons/untitled-ui';

const DOCS_WRITE_FILE_PATH = './docs/src/assets/config.json';

let uid = 0;

const createGlyphs = ({ svgsPath, prefix = '' } = {}) => {
  const files = fs.readdirSync(svgsPath);

  const glyphs = files
    .filter(file => file.match(/\.svg/))
    .map(file => {
      const filePath = path.join(svgsPath, file);
      const fileData = fs.readFileSync(filePath, 'utf8');
      const [fileName, ...otherClasses] = file.replace(/\.svg/, '').split('--');

      const iconName = `${fileName}${otherClasses
        .map(className => `.ii-${className}`)
        .join('')}`;

      const { data } = optimize(fileData, {
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false,
                convertPathData: false,
              },
            },
          },
        ],
      });

      const isFillRuleEvenOdd = data.match(/fill-rule="evenodd"/);

      if (isFillRuleEvenOdd) {
        throw new Error(`fill-rule을 변경해주세요: ${fileName}.svg`);
      }

      const svgPathData = data
        .match(/\bd=(['"])(.*?)\1/g)
        .map(p => p.match(/d="([\s\S]*?)"/)[1])
        .join(' ');

      const svgViewBoxWidth = data
        .match(/viewBox="([\s\S]*?)"/)[1]
        .split(' ')[3];

      const scaledPath = svgpath(svgPathData)
        .scale(1000 / parseInt(svgViewBoxWidth, 10))
        .abs()
        .round(0)
        .rel()
        .toString();

      uid += 1;

      return {
        uid: uid.toString(),
        css: `${prefix}${iconName}`,
        code: uid + 59391,
        src: 'custom_icons',
        selected: true,
        svg: {
          path: scaledPath,
          width: 1000,
        },
        search: [`${prefix}${iconName}`],
      };
    });

  return glyphs;
};

const createConfig = ({
  name = 'inticons',
  glyphs = createGlyphs({
    svgsPath: DEFAULT_SVGS_PATH,
  }),
} = {}) => ({
  name,
  css_prefix_text: 'ii-',
  css_use_suffix: false,
  hinting: true,
  units_per_em: 1000,
  ascent: 850,
  copyright: 'INTEGRATION Corp.',
  glyphs,
});

const inticonsConfig = createConfig();
const inticonsUntitledUiConfig = createConfig({
  name: 'inticons-untitled-ui',
  glyphs: createGlyphs({
    svgsPath: UNTITLED_UI_SVGS_PATH,
    prefix: 'untitledui-',
  }),
});

const docsConfig = createConfig({
  glyphs: [...inticonsConfig.glyphs, ...inticonsUntitledUiConfig.glyphs],
});

fs.writeFileSync(WRITE_FILE_PATH, JSON.stringify(inticonsConfig, null, 2));

fs.writeFileSync(
  UNTITLED_UI_WRITE_FILE_PATH,
  JSON.stringify(inticonsUntitledUiConfig, null, 2)
);

fs.writeFileSync(DOCS_WRITE_FILE_PATH, JSON.stringify(docsConfig, null, 2));
