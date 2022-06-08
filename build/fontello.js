const fs = require('fs');
const path = require('path');
const svgpath = require('svgpath');

(() => {
  const writeFilePath = './fonts/config.json';
  const svgsPath = './icons';
  const files = fs.readdirSync(svgsPath);
  const glyphs = [];
  let uid = 1;

  files.forEach(file => {
    const isSvg = file.match(/\.svg/);

    if (!isSvg) {
      return;
    }

    const filePath = path.join(svgsPath, file);
    const fileData = fs.readFileSync(filePath, 'utf8');
    const fileName = file.replace(/\.svg/, '');

    const svgPathData = fileData.match(/<path\sd="([\s\S]*?)"\/>/)[1];
    const svgViewBoxWidth = fileData
      .match(/viewBox="([\s\S]*?)"/)[1]
      .split(' ')[3];
    const scaledPath = svgpath(svgPathData)
      .scale(1000 / parseInt(svgViewBoxWidth))
      .abs()
      .round(0)
      .rel()
      .toString();

    glyphs.push({
      uid: uid.toString(),
      css: fileName,
      code: uid++ + 59391,
      src: 'custom_icons',
      selected: true,
      svg: {
        path: scaledPath,
        width: 1000,
      },
      search: [fileName],
    });
  });

  const config = {
    name: 'inticon',
    css_prefix_text: 'ii-',
    css_use_suffix: false,
    hinting: true,
    units_per_em: 1000,
    ascent: 850,
    copyright: 'INTEGRATION Corp.',
    glyphs,
  };

  fs.writeFileSync(writeFilePath, JSON.stringify(config, null, 2));
})();
