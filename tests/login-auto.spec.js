import {test, expect } from '@playwright/test';

test('Login', async({page}) => {
    
    await page.goto('http://localhost:3000/')
    //await page.pause()
    await page.locator('input[name="username"]').fill('test')
    await page.locator('input[name="password"]').fill('1234')
    await page.getByRole('button', { name: 'Se connecter' }).click();
    
})
