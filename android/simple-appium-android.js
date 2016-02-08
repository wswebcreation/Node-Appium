var wd = require('wd'),
    desiredCaps = {
        browserName: '',
        appiumVersion: '1.4.16',
        deviceName: 'Samsung Galaxy S4 Emulator',
        platformVersion: '4.4',
        platformName: 'Android',
        name: 'Sample Test',
        app: 'http://appium.s3.amazonaws.com/ContactManager.apk'
    },
    driver = wd.remote("ondemand.saucelabs.com", 80, "YOUR_SAUCE_USERNAME", "YOUR_SAUCE_ACCESS_KEY");

driver.init(desiredCaps, function(error) {
    if (error) {
        throw new Error('Session did not start properly. Please make sure you sauce credentials are correct');
    }
    driver.quit();
});
