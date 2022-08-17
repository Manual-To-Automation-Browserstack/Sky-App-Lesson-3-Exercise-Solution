exports.config = {

  specs: [],


  logLevel: "debug",

  coloredLogs: true,

  bail: 0,

  waitforTimeout: 10000,

  connectionRetryTimeout: 240000,

  connectionRetryCount: 3,

  framework: "mocha",
  reporters: ["spec", ["allure", { outputDir: "allure-results" }]],

  mochaOpts: {
    ui: "bdd",
    timeout: 500000,
  },
  afterTest: async function (
    test,
    context,
    { error, result, duration, passed, retries }
  ) {
    if (error) {
      await driver.takeScreenshot();
    }
  },
};
