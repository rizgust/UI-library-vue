module.exports = {
  env: {
    development: {
      presets: [
        '@quark/babel-preset-app'
      ]
    },

    production: {
      presets: [ 'es2015-rollup' ],
      comments: false
    }
  }
}
