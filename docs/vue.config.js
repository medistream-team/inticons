const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    entry: './src/main.js',
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions = {
          whitespace: 'preserve',
        };
        return options;
      });

    config.plugin('html').tap(args => {
      args[0].template = '/index.html';
      return args;
    });

    config.module
      .rule('md')
      .test(/\.md?$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end();
  },
});
