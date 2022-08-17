var defaults = require("./wdio-bstack.conf.js");
var _ = require("lodash");

var overrides = {
  specs: [
    "./test/specs/lesson3_LoginVerification.ts"
  ],

  capabilities: [
    {
      maxInstances: 1,
      build: "Sky - App Training - Lesson 3 - Exercise Solution",
      device: "iPhone 13",
      os_version: "15.0",
      app: 'Sky_App_Exercise_3_iOS',
      autoGrantPermissions: true,
      platformName: "iOS",
    },
  ],
};

const tmpConfig = _.defaultsDeep(overrides, defaults.config);

tmpConfig.capabilities.forEach((caps) => {
  for (const i in tmpConfig.commonCapabilities)
    caps[i] = caps[i] || tmpConfig.commonCapabilities[i];
});

exports.config = tmpConfig;
