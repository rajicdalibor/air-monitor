module.exports = {
  "publicPath": process.env.NODE_ENV === 'production'
      ? '/air-monitor/'
      : '/',
  "transpileDependencies": [
    "vuetify"
  ],
}