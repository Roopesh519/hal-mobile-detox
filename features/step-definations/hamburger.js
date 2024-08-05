import detox from 'detox';
const { device, element, by, expect } = detox;
import { Given, When, Then } from '@cucumber/cucumber';

Then('I should see the following options:', async function(dataTable) {
  const options = dataTable.rawTable.flat();
  for (const option of options) {
    await expect(element(by.text(option))).toBeVisible();
  }
});
