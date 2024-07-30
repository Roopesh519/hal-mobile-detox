import { Given, When, Then } from '@cucumber/cucumber';
import { device, element, by, expect } from 'detox';

Given('I am logged in', async () => {
  // Assume that the user is already logged in, or implement the login flow
  await device.launchApp({ newInstance: true });
  // Optionally: check that the user is on the home screen after login
  await expect(element(by.id('homeScreen'))).toBeVisible();
});

When('I click the {string} button', async (buttonName: string) => {
  await element(by.id(buttonName)).tap();
});

Then('I should see the following options:', async (dataTable) => {
  const options = dataTable.rawTable.flat();
  for (const option of options) {
    await expect(element(by.text(option))).toBeVisible();
  }
});