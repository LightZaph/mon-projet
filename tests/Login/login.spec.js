import {test, expect } from '@playwright/test';

test ('Login Automatisation Test', (async ({page}) => {

  await page.goto('http://localhost:3000/');
  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('test');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('1234');
  await page.getByRole('button', { name: 'Se connecter' }).click();
  await page.getByRole('link', { name: 'Se déconnecter' }).click();
  await expect(page).toHaveURL('http://localhost:3000/success');

}));