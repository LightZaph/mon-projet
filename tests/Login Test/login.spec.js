import {test, expect, chromium } from '@playwright/test';

test ('Login Automatisation Test', (async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('http://localhost:3000/');
  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('test');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('1234');
  await page.getByRole('button', { name: 'Se connecter' }).click();
  await page.getByRole('link', { name: 'Se déconnecter' }).click();

  // ---------------------
  await context.close();
  await browser.close();
}));