const detox = require('detox');
const {  web, device, element, by, expect } = detox;
const { Given, When, Then } = require('@cucumber/cucumber');

Given('I am on the splash screen', async function () {
  await new Promise(resolve => setTimeout(resolve, 750));
  await expect(element(by.id('splashScreen'))).toBeVisible();
});

When('I see the splash screen', async function () {
  await new Promise(resolve => setTimeout(resolve, 750));
  await expect(element(by.id('splashScreen'))).toBeVisible();
});

Then('I should be prompted to authorize the app using fingerprint or face id', async function () {
  await new Promise(resolve => setTimeout(resolve, 750));
  await expect(element(by.id('fingerprintAuth'))).toBeVisible();
});

When('I authenticate myself using password', async function () {
  await new Promise(resolve => setTimeout(resolve, 750));
  await element(by.id('password-login')).tap();
  await element(by.id('password')).typeText('password');
});

Then('I should see the login screen', async function () {
  await new Promise(resolve => setTimeout(resolve, 750));
  await expect(element(by.id('loginScreen'))).toBeVisible();
});
