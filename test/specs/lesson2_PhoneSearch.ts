import Search from '../pages/Search';

describe('Search for a Phone and add to cart', () => {
  it('searches for a Phone', async () => {
    await Search.addToCart();
    await Search.clickCartButton();
    await Search.checkNumberOfProducts();
  });
});
