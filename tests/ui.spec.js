const { expect } = require('@playwright/test');
const { test } = require('../fixtures/fixtures');

test('Login and Add to Cart', async ({ loginPage, cartPage }) => {
 
  await loginPage.login('standard_user', 'secret_sauce');

 
  await expect(loginPage.page).toHaveURL(/inventory/);

  
  await cartPage.addToCart();

 
  await expect(cartPage.cartBadge).toHaveText('1');

  
  await cartPage.goToCart();

 
  await expect(loginPage.page).toHaveURL(/cart/);

 
  await loginPage.page.screenshot({ path: 'test-results/cart.png' });
});
