const mock = require('@liuhanfei/mock-service');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/prod-h5' : '/dev-h5',
  productionSourceMap: false,
  devServer: {
    overlay: {
      warnings: false,
      errors: true,
    },
    open: true,
    proxy: {
      // 接口转发 代理
      '/api': {
        target: 'http://xxx.xxx.x.xx',
        changeOrigin: true,
      },
    },
    before(app) {
      if (process.env.VUE_APP_ISMOCK === 'true') {
        mock.start(app, { timeout: '800-1000', folderName: 'mock' });
      }
    },
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            hack: `true; @import "./src/assets/less/vars.less";`,
          },
        },
      },
    },
  },
};
