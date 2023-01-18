const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false
})

module.exports = {
  //...
  devServer: {
    allowedHosts: [
      'debian-11.home'
    ]
  }
};