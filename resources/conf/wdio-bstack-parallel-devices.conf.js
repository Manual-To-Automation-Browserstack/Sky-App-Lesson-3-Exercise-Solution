var defaults = require("./wdio-bstack.conf.js");
var _ = require("lodash");

var overrides = {
  specs: [
    // "./test/specs/lesson2_PhoneSearch.ts"
    "./test/specs/lesson3_LoginVerification.ts"
  ],

  capabilities: [
    {
      build: "Sky - App Training - Lesson 2 - Exercise Solution",
      maxInstances: 2,
      device: "Samsung Galaxy A51",
      os_version: "10.0",
      app: "Sky_App_Lesson_2",
      autoGrantPermissions: true,
      platformName: "Android",
    },
    {
      build: "Sky - App Training - Lesson 2 - Exercise Solution",
      maxInstances: 2,
      device: "iPhone 12 Pro",
      platformName: "iOS",
      os_version: "14",
      gpsEnabled: "true",
      app: 'Sky_App_Lesson_2_iOS',
    },
  ],
};

const tmpConfig = _.defaultsDeep(overrides, defaults.config);

tmpConfig.capabilities.forEach((caps) => {
  for (const i in tmpConfig.commonCapabilities)
    caps[i] = caps[i] || tmpConfig.commonCapabilities[i];
});

exports.config = tmpConfig;
