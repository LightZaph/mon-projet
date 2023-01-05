import {test, expect } from '@playwright/test';

test('Demo Login Test', async({page}) => {
    
    await page.goto('https://demo.applitools.com/')
    //await page.pause()
    await page.getByPlaceholder('Enter your username').fill('Raghav')
    await page.getByPlaceholder('Enter your password').fill('1234')
    await page.getByRole('link', { name: 'Sign in' }).click()
})
