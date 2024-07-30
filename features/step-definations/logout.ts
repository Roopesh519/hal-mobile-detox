import { Given, When, Then } from '@cucumber/cucumber';
import { device, element, by, expect } from 'detox';

// Define a timeout for steps that require waiting for UI updates or animations
const TIMEOUT = 5000;

Given('I am on dashboard screen', async () => {
  await device.launchApp({ newInstance: true }); // Ensure app is in a clean state
  // Navigate to the dashboard screen if not already there
  await expect(element(by.id('dashboardScreen'))).toBeVisible();
});

When('I click on hamburger icon', async () => {
  await element(by.id('hamburgerIcon')).tap();
});

Then('I should see the options', async () => {
  await expect(element(by.id('optionsMenu'))).toBeVisible();
});

When('I click the "Logout" button', async () => {
  await element(by.id('logoutButton')).tap();
});

Then('I should see a confirmation prompt', async () => {
  await expect(element(by.id('confirmationPrompt'))).toBeVisible();
});

When('I click the cancel button', async () => {
  await element(by.id('cancelButton')).tap();
});

Then('I should see the options', async () => {
  await expect(element(by.id('optionsMenu'))).toBeVisible();
});

When('I click the close button', async () => {
  await element(by.id('closeButton')).tap();
});

When('I click outside the confirmation prompt', async () => {
  await element(by.id('appBackground')).tap(); // Assuming clicking outside means tapping the background
});

Then('I should not be able to access any authenticated pages without logging back in', async () => {
  await device.reloadReactNative(); // Restart the app
  await element(by.id('authenticatedPageLink')).tap();
  await expect(element(by.id('loginScreen'))).toBeVisible(); // Should still be on the login screen
});

Given('I am logged into the application', async () => {
  await device.launchApp({ newInstance: true }); // Ensure app is in a clean state
  // Assume user login is done. Verify if user is on a logged-in screen.
  await expect(element(by.id('loggedInScreen'))).toBeVisible();
});

Then('I should be logged out successfully', async () => {
  await expect(element(by.id('loginScreen'))).toBeVisible();
});

Then('I should see the login form', async () => {
  await expect(element(by.id('loginForm'))).toBeVisible();
});
