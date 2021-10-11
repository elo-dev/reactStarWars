const { alias } = require('react-app-rewire-alias')

module.exports = function override(config, env) {
    alias({
      '@Components': 'src/Components',
      '@constants': 'src/constants',
      '@hoc-helpers': 'src/hoc-helpers',
      '@services': 'src/services',
      '@routes': 'src/routes',
      '@hooks': 'src/hooks'
    })(config)
    return config;
  }