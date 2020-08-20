module.exports = (config, { _env }) => {
  config.plugins.forEach((plugin) => {
    if (plugin.constructor.name === 'HtmlWebpackPlugin') {
      plugin.options.title = 'Redwood Blog'
    }
  })

  return config
}
