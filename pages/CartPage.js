class CartPage {
  constructor(page) {
    this.page = page;
    this.addToCartBtn = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async addToCart() {
    await this.addToCartBtn.click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }

  async getCartCount() {
    return await this.cartBadge.textContent();
  }
}

module.exports = CartPage;