import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://kennedy-appcues-demo.netlify.app/');
  await page.frameLocator('appcues-container iframe').getByRole('button', { name: 'Next' }).first().click();
  await page.frameLocator('appcues-container iframe').getByRole('button', { name: 'Next' }).nth(1).click();
  await page.getByRole('link', { name: 'Settings' }).click();
  await page.getByRole('button', { name: 'Appcues.debug()' }).click();
  await page.getByRole('combobox').selectOption('Option Two');
  await page.getByRole('link', { name: 'Contact' }).click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.locator('#input-id-field').click();
  await page.locator('#input-id-field').fill('boo');
  await page.getByRole('button', { name: 'Log in' }).click();
});