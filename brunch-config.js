module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!app)/,
        'app.js': ['app/**/*', '!app/**/*.test.*']
      }
    },
    stylesheets: {joinTo: 'app.css'}
  },
  conventions: {
    ignored: [
      /[\\/]_/,
      'app/**/*.test.*'
    ]
  },
  plugins: {
    babel: {presets: ['es2015', 'react']}
  }
};
