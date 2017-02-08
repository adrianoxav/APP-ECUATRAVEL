// Karma configuration
// Generated on Wed Feb 08 2017 13:53:38 GMT-0500 (ECT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'angular-cli'],
    files: [
    'node_modules/es6-shim/es6-shim.js',        // TypeError: undefined is not a constructor (evaluating 'new exports.Map()')
    'node_modules/reflect-metadata/Reflect.js', // 'Uncaught reflect-metadata shim is required when using class decorators'
    'node_modules/zone.js/dist/zone.js',        // Zone.js dependencies (Zone undefined)
    'node_modules/zone.js/dist/jasmine-patch.js',
    'node_modules/zone.js/dist/async-test.js',
    'node_modules/zone.js/dist/fake-async-test.js',
    'app/**/*.spec.ts',
    {pattern: 'node_modules/reflect-metadata/Reflect.js.map', included: false, served: true}, // 404 on the same
    {pattern: 'www/build/**/*.html', included: false},
  ],
    plugins: [
     require('karma-jasmine'),
     require('karma-chrome-launcher'),
     require('karma-remap-istanbul'),
     require('karma-mocha-reporter'),
     require('angular-cli/plugins/karma')
   ],
   preprocessors: {
        './src/test.ts': ['angular-cli']
      },
      mime: {
        'text/x-typescript': ['ts','tsx']
      },
      remapIstanbulReporter: {
        reports: {
          html: 'coverage',
          lcovonly: './coverage/coverage.lcov'
        }
      },
      angularCli: {
        config: './angular-cli.json',
        environment: 'dev'
      },
      reporters: config.angularCli && config.angularCli.codeCoverage
                ? ['mocha', 'karma-remap-istanbul']
                : ['mocha'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      browsers: ['Chrome'],
      singleRun: false
    });
  };
