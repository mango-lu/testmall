module.exports = {
  configureWebpack:{
    resolve:{
      alias:{
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views'
        // router、store可以直接使用$.router、$store引用，所以不需别名
      }
    }
  }
}