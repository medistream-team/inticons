module.exports = {
  inputDir: './icons',
  outputDir: './fonts/css',
  fontTypes: ['eot', 'svg', 'ttf', 'woff', 'woff2'],
  assetTypes: [],
  pathOptions: {
    css: './fonts/css/inticons.css',
    eot: './fonts/font/inticons.eot',
    svg: './fonts/font/inticons.svg',
    ttf: './fonts/font/inticons.ttf',
    woff: './fonts/font/inticons.woff',
    woff2: './fonts/font/inticons.woff2',
  },
  formatOptions: {
    svg: {
      centerHorizontally: true,
      centerVertically: true,
    },
  },
  name: 'inticons',
  tag: 'i',
  prefix: 'ii',
  normalize: true,
  descent: 45,
  fontsUrl: '../font',
  getIconId: ({ basename }) => {
    const [mainClass, ...otherClasses] = basename.split('--');

    return `${mainClass}${otherClasses
      .map(className => `.ii-${className}`)
      .join('')}`;
  },
};
