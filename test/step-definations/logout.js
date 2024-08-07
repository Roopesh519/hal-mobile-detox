import detox from 'detox';
const { device, element, by, expect } = detox;
import { Given, When, Then } from '@cucumber/cucumber';

// Define a timeout for steps that require waiting for UI updates or animations
const TIMEOUT = 5000;

Given('I am on the dashboard screen', async function() {
  await new Promise(resolve => setTimeout(resolve, 750));
  await expect(element(by.id('dashboardScreen'))).toBeVisible();
});

When('I click on the hamburger icon', async function() {
  await new Promise(resolve => setTimeout(resolve, 750));
  await element(by.id('hamburgerIcon')).tap();
});

When('I click the logout button', async function() {
  await new Promise(resolve => setTimeout(resolve, 750));
  await element(by.id('logoutButton')).tap();
});

Then('I should see a confirmation prompt', async function() {
  await new Promise(resolve => setTimeout(resolve, 750));
  await expect(element(by.id('confirmationPrompt'))).toBeVisible();
});

When('I click the cancel button', async function() {
  await new Promise(resolve => setTimeout(resolve, 750));
  await element(by.id('cancelButton')).tap();
});

Then('I should see the options', async function() {
  await new Promise(resolve => setTimeout(resolve, 750));
  await expect(element(by.id('optionsMenu'))).toBeVisible();
});

When('I click the close button', async function() {
  await new Promise(resolve => setTimeout(resolve, 750));
  await element(by.id('closeButton')).tap();
});

When('I click outside the confirmation prompt', async function() {
  await new Promise(resolve => setTimeout(resolve, 750));
  await element(by.id('appBackground')).tap(); // Assuming clicking outside means tapping the background
});

Then('I should be logged out successfully', async function() {
  await new Promise(resolve => setTimeout(resolve, 750));
  await expect(element(by.id('loginScreen'))).toBeVisible();
});

Then('I should see the login form', async function() {
  await new Promise(resolve => setTimeout(resolve, 750));
  await expect(element(by.id('loginScreen'))).toBeVisible();
});

Then('I confirm the logout action', async function () {
  await new Promise(resolve => setTimeout(resolve, 750));
  await element(by.id('confirm')).tap();
});

Then('I should be redirected to the login screen', async function () {
  await expect(element(by.id('loginScreen'))).toBeVisible();
});
