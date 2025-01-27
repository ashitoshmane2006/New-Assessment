exports.config = {
  tests: './tests/*.test.js', // path to your test files
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost', // default URL
      show: true, // set to false if you want to run tests headlessly
      browser: 'chromium', // you can also use 'firefox' or 'webkit'
      restart: false, // for avoiding browser restart on each test
      windowSize: '1200x900', // setting window size
    },
  },
  include: {},
  bootstrap: null,
  mocha: {},
  name: 'your-project-name',
  plugins: {
    allure: {
      enabled: true,
      outputDir: './output/allure-results', 
    },
  },
};
