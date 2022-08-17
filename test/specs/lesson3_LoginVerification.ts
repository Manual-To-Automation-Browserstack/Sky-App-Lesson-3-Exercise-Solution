import Login from '../pages/Login';

describe('Search for a Phone and add to cart', () => {
  it('searches for a Phone', async () => {
    await Login.addToFavourites();
    await Login.performLogin();
    await Login.verifyLoggedInState();
  });
});
