![Logo](https://www.browserstack.com/images/static/header-logo.jpg)

# Manual To Automation @ SKY - App - Lesson 3 - WebDriverIO Appium Exercise Solution <a href="https://appium.io/"><img src="https://brandslogos.com/wp-content/uploads/images/large/appium-logo.png" alt="appium" height="22" /></a>

## Introduction

This code is an example of a successful login flow using the WebDriverIO Appium framework running on BrowserStack against a real mobile device.

As we are running on BrowserStack, you don't need Appium installed, but you should already have this intstalled. It is also useful for debugging with the use of Appium Inspector.

---

## Installation

There are a few things that you will need before you can get started.

* NodeJS - use [this](https://phoenixnap.com/kb/install-node-js-npm-on-windows) guide for Windows and [this](https://nodesource.com/blog/installing-nodejs-tutorial-mac-os-x/) guide for Mac.
* Git for pulling down the code - follow [this]() guide for installing Git on all platforms. There are other useful guides on the website mentioned previously. Start [here](https://github.com/git-guides) anad follow through to the various links to learn more about Git. It will be very useful on your automation journey. If you have any issues with tokens or user credentials, let me know as this can trip a lot of people up.
* Visual Studio Code - You can download VS Code for free from [here](https://code.visualstudio.com/download). This is a very useful tool for writing and running your code as it has auto complete, and powerful debugging capabilities. [This](https://code.visualstudio.com/docs/introvideos/basics) is a handy starting point for how to get started with VS Code.

Once you have these installed, you are good to go to the next step.

Follow the below steps to get the code onto your local machine.

* Open a terminal. (Terminal on Mac, Command Prompt on Windows)
* Go to the directory where you want to place the code using [cd](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/cd) for Windows, and it functions mostly the same for Mac. You just use "cd" but the folder structure on Mac is different (/Users/username/Documents instead of C:/Users/username/Documents)
* Copy the following command into the terminal, (remember, you must have [Git](https://git-scm.com/downloads) installed)
```sh
git clone https://github.com/Manual-To-Automation-Browserstack/Sky-App-Lesson-3-Exercise-Solution.git.
```
* Move into the directory that you just cloned by typing
```sh
cd Sky-App-Lesson-3-Exercise-Solution
```
* When inside this directory, copy the following command and run it:
```sh
npm install
```
* Then simply run the below command to run on ios:
```sh
npm run bstack-single-ios
```

And run the below command to run on android:
```sh
npm run bstack-single-android
```

This script is useful to get started. You will find the others listed in the "scripts" section of the [package.json](./package.json) file. You can also add more as needed. You simply run:

```sh
npm run <insert script name>
```

**NOTE:** As memtioned above, you don't need Appium installed locally to run the tests on BrowserStack but it is recommended you have this installed for future exercises as the Appium Inspector is a very useful tool within Appium for debugging and finding the right locators.

---

# BrowserStack

[BrowserStack](https://browserstack.com) provides instant access to 2,000+ real mobile devices and browsers on a highly reliable cloud infrastructure that effortlessly scales as testing needs grow.

---

# Capabilities

The capabilities that you define are essential to running both on BrowserStack and through Appium. You need to define, at a minimum, the device name, the app url (or custom ID) and your BrowserStack credentials.

The basic outline of the capabilities will look something like the below:

```js
# Android
capabilities = [
  'browserstack.user' : process.env.BROWSERSTACK_USERNAME,
  'browserstack.key' : process.env.BROWSERSTACK_ACCESS_KEY,
  'build' : 'Sky - First App Automate Test',
  'name': 'First Test - Sky - Android',
  'device' : 'Samsung Galaxy S22',
  'app' : 'My_Sky_App_Android' || '<app_url>',
  'browserstack.debug' : true,
  'platformName': 'android'
]

# iOS
capabilities = [
  'browserstack.user' : process.env.BROWSERSTACK_USERNAME,
  'browserstack.key' : process.env.BROWSERSTACK_ACCESS_KEY,
  'build' : 'Sky - First App Automate Test',
  'name': 'First Test - Sky - iOS',
  'device' : 'iPhone 13',
  'app' : 'My_Sky_App_iOS' || '<app_url>',
  'browserstack.debug' : true,
  'platformName': 'ios'
]


```

See the process for adding the environment variables below.

---

# Uploading your app to BrowserStack

First and foremost, there is a handy guide on the BrowserStack website [here](https://www.browserstack.com/docs/app-automate/api-reference/appium/apps#upload-an-app) that can be referenced. The basic method of uploading an app is using the REST api. Below is an example of an App upload using this api:

```sh
curl -u "<browserstack_username>:<browserstack_access_key>" \
-X POST "https://api-cloud.browserstack.com/app-automate/upload" \
-F "file=@/path/to/app/file/application-debug.apk" \
-F "custom_id=SampleApp"
```

You can use a local file path as in the above example or a public facing URL as in the below example:

```sh
curl -u "<browserstack_username>:<browserstack_access_key>" \
-X POST "https://api-cloud.browserstack.com/app-automate/upload" \
-F "url=https://www.browserstack.com/app-automate/sample-apps/android/WikipediaSample.apk"
```

You will receive a response similar to this:

```sh
{
    "app_url": "bs://c8ddcb5649a8280ca800075bfd8f151115bba6b3",
    "custom_id": "SampleApp",
    "shareable_id": "steve/SampleApp"
}

```

The "custom id" can be used for multiple app uploads to prevent frequent changes to your capabilities. It is typically used with apps that are being updated on a consistent basis to fix bugs and add new features.

---

## Prerequisites

* Create a new [BrowserStack account](https://www.browserstack.com/users/sign_up) or use an existing one.
* Identify your BrowserStack username and access key from the [BrowserStack App Automate Dashboard](https://app-automate.browserstack.com/) and export them as environment variables using the below commands.

    - For \*nix based and Mac machines:

  ```sh
  export BROWSERSTACK_USERNAME=<browserstack-username> &&
  export BROWSERSTACK_ACCESS_KEY=<browserstack-access-key>
  ```

    - For Windows:

  ```shell
  set BROWSERSTACK_USERNAME=<browserstack-username>
  set BROWSERSTACK_ACCESS_KEY=<browserstack-access-key>
  ```
  
  Alternatively, you can also hardcode username and access_key objects in the code but this is **NOT** recommended.
