const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
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
      args[0].template = 'docs/index.html';
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
