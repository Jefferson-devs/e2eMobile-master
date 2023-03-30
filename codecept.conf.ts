import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  name: 'e2eMobile-master',
  tests: './*Login.ts',
  output: './output',
  helpers: {
    Appium: {
      platform: 'Android',
      app: '/Users/jeffersonsoaresdesouza/Downloads/app-qa.apk',
      desiredCapabilities: {
        appPackage: 'br.com.apcapsp.app.debug',
        appActivity: 'br.com.apcapsp.app.SplashActivity',
        deviceName: 'Pixelpie',
        platformVersion: '9',
      },
    },
  },
  include: {
    I: './metodosFile',
  },
  bootstrap: null,
  mocha: {},
  plugins: {
    retryFailedStep: {
      enable: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
};
