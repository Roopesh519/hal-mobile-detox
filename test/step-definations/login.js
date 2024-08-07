import detox from 'detox';
const {  web, device, element, by, expect } = detox;
import { Given, When, Then } from '@cucumber/cucumber';

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

When('I click on the login button', async function () {
  await new Promise(resolve => setTimeout(resolve, 750));
  await element(by.id('loginButton')).tap();
});

Then('I should be navigated to the external webview for login', async function () {
  await new Promise(resolve => setTimeout(resolve, 1000));
  const myWebView = web(by.id('webviewLogin'));
  await expect(myWebView).toExist();
});

When('I login with my email and password', async function () {
  await new Promise(resolve => setTimeout(resolve, 750));
  const myWebView = web(by.id('webviewLogin'));
  const emailInput = myWebView.element(by.web.id('emailInput'));
  await emailInput.typeText('user@example.com');
  const passwordInput = myWebView.element(by.web.id('passwordInput'));
  await passwordInput.typeText('password123');
  const submitButton = myWebView.element(by.web.id('submitButton'));
  await submitButton.tap();
});

Then('I should be navigated back to the application', async function () {
  await new Promise(resolve => setTimeout(resolve, 750));
  await device.sendToHome();
  await device.launchApp({ newInstance: false });
  await expect(element(by.id('dashboardScreen'))).toBeVisible();
});

Then('I should be redirected to the dashboard', async function () {
  await new Promise(resolve => setTimeout(resolve, 750));
  await expect(element(by.id('dashboardScreen'))).toBeVisible();
});
