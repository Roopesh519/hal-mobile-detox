import detox from 'detox';
const { device, element, by, expect } = detox;
import { Given, When, Then } from '@cucumber/cucumber';

Then('I should see the halspan logo', async function() {
  await expect(element(by.id('halspanLogo'))).toBeVisible();
});

Then('I should see my name prominently displayed', async function() {
  await expect(element(by.id('userName'))).toBeVisible();
});

Then('I should see options to {string}', async function (optionsString) {
  const expectedOptions = JSON.parse(optionsString);
  for (const option of expectedOptions) {
    const optionElement = element(by.text(option));
    await expect(optionElement).toBeVisible();
  }
});