var defaults = require("./wdio-bstack.conf.js");
var _ = require("lodash");

var overrides = {
  specs: [
    // "./test/specs/lesson2_PhoneSearch.ts"
    "./test/specs/lesson3_LoginVerification.ts"
  ],

  capabilities: [
    {
      maxInstances: 1,
      build: "Sky - App Training - Lesson 2 - Exercise Solution - Android",
      device: "Samsung Galaxy S22",
      os_version: "12.0",
      app: 'Sky_App_Exercise_3',
      autoGrantPermissions: true,
      platformName: "Android",
    },
  ],
};

const tmpConfig = _.defaultsDeep(overrides, defaults.config);

tmpConfig.capabilities.forEach((caps) => {
  for (const i in tmpConfig.commonCapabilities)
    caps[i] = caps[i] || tmpConfig.commonCapabilities[i];
});

exports.config = tmpConfig;
