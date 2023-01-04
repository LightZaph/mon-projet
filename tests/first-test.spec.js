const {test, expect} = require('@playwright/test')
//const {hello, how} = require('./demo/hello')

// test hello();

test('My first auto test', async ({page}) => {
    await page.goto('https://google.com')
    await expect(page).toHaveTitle('Google')
})