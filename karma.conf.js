const externals = require('./externals.conf.js');

module.exports = function(config) {
  const files = [
    'node_modules/sinon/pkg/sinon.js',
    'node_modules/react/dist/react-with-addons.min.js',
    'node_modules/react-dom/dist/react-dom.min.js',
    'node_modules/hammerjs/hammer.min.js',
    'node_modules/syn/dist/global/syn.js',
    'browser/noflo-ui.min.js',
    'spec/utils/*.js',
    'spec/*.js',
    'spec/browser/*.js',
    {
      pattern: 'spec/mockruntime.html',
      included: false,
      served: true,
      watched: true,
    },
    {
      pattern: 'index.html',
      included: false,
      served: true,
      watched: true,
    },
  ];
  const serveExternals = externals.slice(0);
  serveExternals.push('themes/*.css');
  serveExternals.push('css/*.css');
  serveExternals.forEach((pattern) => {
    if (files.indexOf(pattern) !== -1) {
      return;
    }
    files.push({
      pattern,
      included: false,
      served: true,
      watched: false,
    });
  });

  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files,
    exclude: [],
    preprocessors: {},
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['ChromeHeadless'],
    //browsers: [],
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,
    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
