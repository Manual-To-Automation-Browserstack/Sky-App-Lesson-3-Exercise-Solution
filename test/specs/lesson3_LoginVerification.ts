import Login from '../pages/Login';

let username = "demouser";
let password = "testingisfun99";

describe('Search for a Phone and add to cart', () => {
  it('searches for a Phone', async () => {
    await Login.addToFavourites();
    await Login.performLogin(username, password);
    await Login.verifyLoggedInState();
  });
});
