import { Given, When, Then } from '@cucumber/cucumber';
import { device, element, by, expect } from 'detox';

Then('I should see the Halspan Logo', async () => {
  await expect(element(by.id('halspanLogo'))).toBeVisible();
});

Then('I should see my name prominently displayed', async () => {
  await expect(element(by.id('userName'))).toBeVisible();
});

Then('I should see options to {string}, {string}, {string}, {string}, {string} and {string}', async (option1: string, option2: string, option3: string, option4: string, option5: string, option6: string) => {
  await expect(element(by.text(option1))).toBeVisible();
  await expect(element(by.text(option2))).toBeVisible();
  await expect(element(by.text(option3))).toBeVisible();
  await expect(element(by.text(option4))).toBeVisible();
  await expect(element(by.text(option5))).toBeVisible();
  await expect(element(by.text(option6))).toBeVisible();
});

Then('the displayed options should be based on my role and permissions', async () => {
  // Implement logic to verify that the correct options are displayed based on the user's role and permissions
  // This may involve checking the visibility or presence of specific elements
});
