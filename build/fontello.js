const fs = require('fs');
const path = require('path');
const svgpath = require('svgpath');
const { optimize } = require('svgo');

const WRITE_FILE_PATH = './fonts/config.json';
const SVGS_PATH = './icons';

const createGlyphs = svgsPath => {
  const files = fs.readdirSync(svgsPath);

  const glyphs = files
    .filter(file => file.match(/\.svg/))
    .map((file, index) => {
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

      return {
        uid: (index + 1).toString(),
        css: iconName,
        code: index + 1 + 59391,
        src: 'custom_icons',
        selected: true,
        svg: {
          path: scaledPath,
          width: 1000,
        },
        search: [iconName],
      };
    });

  return glyphs;
};

const config = {
  name: 'inticons',
  css_prefix_text: 'ii-',
  css_use_suffix: false,
  hinting: true,
  units_per_em: 1000,
  ascent: 850,
  copyright: 'INTEGRATION Corp.',
  glyphs: createGlyphs(SVGS_PATH),
};

fs.writeFileSync(WRITE_FILE_PATH, JSON.stringify(config, null, 2));
