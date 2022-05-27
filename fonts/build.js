const fs = require('fs');

const readFilePath = './fonts/config.json';
const writeFilePath = './docs/src/views/config.json';

const makeGlyphs = json => {
  const glyphs = [];
  JSON.parse(json).glyphs.forEach(({ uid, css, search }) =>
    glyphs.push({ uid, css, search })
  );

  return JSON.stringify(glyphs);
};

function readConfigFile(filePath) {
  const configJson = fs.readFileSync(filePath, 'utf-8');
  return makeGlyphs(configJson);
}

(() => {
  const fontelloConfig = readConfigFile(readFilePath);
  fs.writeFileSync(writeFilePath, fontelloConfig);
})();
