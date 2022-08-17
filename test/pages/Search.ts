import { expect } from 'chai';

class Search {
    constructor() {
        
    }

    async addToCart () {
        await this.addToCartSelector.waitForDisplayed({ timeout: 30000 });
        await this.addToCartSelector.click();
    }

    async clickCartButton () {
        await this.cartButtonSelector.waitForDisplayed({ timeout: 30000 });
        await this.cartButtonSelector.click();
    } 

    async checkNumberOfProducts () {
        await this.numProductsSelector.waitForDisplayed({ timeout: 30000 });
        await expect(await this.numProductsSelector.getText()).to.equal("1 product(s) found.");
    } 

    // Various getter methods for all of the selectors that will be used in this Object
    get crossPlatformSelector () { 
        const selectorAndroid = 'new UiSelector().resourceId("android:id/text1")'
        const selectorIOS = 'UIATarget.localTarget().frontMostApp().mainWindow().buttons()[0]'
        const selectorType = driver.isAndroid ? 'android' : 'ios'
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS
        return $(`${selectorType}=${selector}`)  
    };

    // Example of cross platform selector
    get backButtonSelector () { 
        const selectorAndroid = 'back_android'
        const selectorIOS = 'back_ios'
        const selectorType = driver.isAndroid ? 'android' : 'ios'
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS
        return $(`${selectorType}=${selector}`)  
    };

    get addToCartSelector () { return $(`~add-to-cart-12`) };

    get cartButtonSelector () { return $('~nav-cart') }

    get numProductsSelector () { return $('~number-of-products') }
}

export default new Search;