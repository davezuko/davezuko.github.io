exports.config = {
  files: {
    javascripts: {
      joinTo: 'js/app.js'
    },
    stylesheets: {
      joinTo: 'css/main.css'
    },
    templates: {
      joinTo: 'js/main.js'
    }
  },
  conventions: {
    assets: /^(static)/
  },
  paths: {
    watched: ['static', 'sass', 'js'],
    public: '../priv/static'
  },
  plugins: {
    sass: {
      mode: 'native',
      options: {
        includePaths: [require('path').resolve('node_modules')]
      }
    },
  },
  modules: {
    autoRequire: {
      'js/app.js': ['js/app']
    }
  },
  npm: {
    enabled: true,
  }
};
