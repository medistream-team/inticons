const fs = require('fs');
const svgpath = require('svgpath');

(() => {
  const writeFilePath = 'fonts/test.json';
  const svgs = 'icons';
  const files = fs.readdirSync(svgs);
  const glyphs = [];

  files.forEach((file, index) => {
    const fileData = fs.readFileSync(`${svgs}/${file}`, 'utf-8');
    const path = fileData.split('path d="')[1].slice(0, -9);
    const scaledPath = svgpath(path)
      .scale(1000 / 24)
      .abs()
      .round(0)
      .rel()
      .toString();

    glyphs.push({
      uid: (index + 1).toString(),
      css: file.slice(0, -4),
      code: index + 59392,
      src: 'custom_icons',
      selected: true,
      svg: {
        path: scaledPath,
        width: 1000,
      },
      search: [file.slice(0, -4)],
    });
  });

  const config = {
    name: 'inticon',
    css_prefix_text: 'ii ii-',
    css_use_suffix: false,
    hinting: true,
    units_per_em: 1000,
    ascent: 850,
    copyright: 'medistream',
    glyphs,
  };

  fs.writeFileSync(writeFilePath, JSON.stringify(config, null, 2));
})();
