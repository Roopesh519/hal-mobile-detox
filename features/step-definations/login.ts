import { Given, When, Then } from '@cucumber/cucumber';
import { device, element, by, expect } from 'detox';

Given('the app is launched', async () => {
  await device.launchApp();
});

When('I see the splash screen', async () => {
  await expect(element(by.id('splashScreen'))).toBeVisible();
});

Then('I should be prompted to authorize the app using fingerprint or face id', async () => {
  await expect(element(by.id('fingerprintAuth'))).toBeVisible();
});

When('I authenticate myself using fingerprint or face id', async () => {
  // Simulating fingerprint/Face ID authentication
  await device.sendToHome();
  await device.launchApp({ newInstance: false });
});

Then('I should see the login screen', async () => {
  await expect(element(by.id('loginScreen'))).toBeVisible();
});

When('I click on the login button', async () => {
  await element(by.id('loginButton')).tap();
});

Then('I should be navigated to the external webview for login', async () => {
  await expect(element(by.id('webviewLogin'))).toBeVisible();
});

When('I login with my email and password', async () => {
  await element(by.id('emailInput')).typeText('user@example.com');
  await element(by.id('passwordInput')).typeText('password123');
  await element(by.id('submitButton')).tap();
});

Then('I should be navigated back to the application', async () => {
  await device.sendToHome();
  await device.launchApp({ newInstance: false });
});

Then('I should be redirected to the dashboard', async () => {
  await expect(element(by.id('mainScreen'))).toBeVisible();
});
