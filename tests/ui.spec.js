const { expect } = require('@playwright/test');
const { test } = require('../fixtures/fixtures');

test('Login and Add to Cart', async ({ loginPage, cartPage }) => {
  // Login
  await loginPage.login('standard_user', 'secret_sauce');

  // Login successful check
  await expect(loginPage.page).toHaveURL(/inventory/);

  // Add to cart
  await cartPage.addToCart();

  // Cart badge check
  await expect(cartPage.cartBadge).toHaveText('1');

  // Go to cart
  await cartPage.goToCart();

  // Cart page check
  await expect(loginPage.page).toHaveURL(/cart/);

  // Screenshot
  await loginPage.page.screenshot({ path: 'test-results/cart.png' });
});