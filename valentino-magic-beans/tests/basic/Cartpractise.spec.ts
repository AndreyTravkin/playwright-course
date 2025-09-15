import {test, expect} from '@playwright/test';

test('Item is added to the shopping cart', async ({ page }) => {
  await page.goto('https://valentinos-magic-beans.click/products');
});
