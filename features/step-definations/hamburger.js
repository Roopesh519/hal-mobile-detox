import detox from 'detox';
const { device, element, by, expect } = detox;
import { Given, When, Then } from '@cucumber/cucumber';

Then('I should see the following options {string}', async function (optionsTable) {
  const expectedOptions = optionsTable.raw()[0]; // Get the array of options from the table

  for (const option of expectedOptions) {
    const optionElement = element(by.text(option));
    await expect(optionElement).toBeVisible();
  }
});
