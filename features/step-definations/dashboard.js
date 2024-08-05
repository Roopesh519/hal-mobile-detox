import detox from 'detox';
const { device, element, by, expect } = detox;
import { Given, When, Then } from '@cucumber/cucumber';

Then('I should see the halspan logo', async function() {
  await expect(element(by.id('halspanLogo'))).toBeVisible();
});

Then('I should see my name prominently displayed', async function() {
  await expect(element(by.id('userName'))).toBeVisible();
});

Then('I should see options to {string}, {string}, {string}, {string}, {string}, {string}', async function(option1, option2, option3, option4, option5, option6) {
  await expect(element(by.text(option1))).toBeVisible();
  await expect(element(by.text(option2))).toBeVisible();
  await expect(element(by.text(option3))).toBeVisible();
  await expect(element(by.text(option4))).toBeVisible();
  await expect(element(by.text(option5))).toBeVisible();
  await expect(element(by.text(option6))).toBeVisible();
});