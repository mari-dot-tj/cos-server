const path = require('path')

module.exports = {
  "lintOnSave": false,
  "transpileDependencies": [
    "vuetify"
  ],
  // publicPath: process.env.NODE_ENV === 'production'
  // ? '/'
  // : 'http://localhost:3000',
  outputDir: path.resolve(__dirname, '../server/public'),

}
