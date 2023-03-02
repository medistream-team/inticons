const { generateFonts } = require('fantasticon');
const fs = require('fs');
const fantasticonOption = require('../.fantasticonrc.js');

const generateCssClassCode = (classes, code) =>
  `.ii-${classes}:before { content: '\\${code.toString(16)}'; }`;

const convertCodepointsToCss = codepoints =>
  Object.entries(codepoints).reduce(
    (acc, [classes, code]) => `${acc}
${generateCssClassCode(classes, code)}`,
    ''
  );

const convertCodepointsToConfig = codepoints =>
  Object.entries(codepoints).reduce(
    (acc, [classes, code]) => ({
      glyphs: [...acc.glyphs, { css: classes, code, search: [classes] }],
    }),
    { glyphs: [] }
  );

(async () => {
  const { codepoints } = await generateFonts(fantasticonOption);

  const css = convertCodepointsToCss(codepoints);

  fs.writeFileSync('./fonts/css/inticons-codes.css', css);

  const config = convertCodepointsToConfig(codepoints);

  fs.writeFileSync('./fonts/config.json', JSON.stringify(config, null, 2));
})();
