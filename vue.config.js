module.exports = { 
  publicPath: '',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/variables.scss";`
      }
    }
  }
}