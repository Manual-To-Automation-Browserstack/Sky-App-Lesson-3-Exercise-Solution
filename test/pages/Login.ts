import { expect } from 'chai';

class Login {
    constructor() {
        
    }

    async addToFavourites () {
        await this.favouriteSelector.waitForDisplayed({ timeout: 30000 });
        await this.favouriteSelector.click();
    }

    async performLogin (username : string, password : string) {
        await this.loginUsernameDropdownSelector.waitForDisplayed({ timeout: 30000 });
        await this.loginUsernameDropdownSelector.click();

        if (driver.isAndroid) {
            await this.loginUsernameSelector.waitForDisplayed({ timeout: 30000 });
            await this.loginUsernameSelector.click();
        } else {
            await this.loginUsernameSelector.waitForDisplayed({ timeout: 30000 });
            await this.loginUsernameSelector.addValue(username);
            await this.doneWheelSelector.waitForDisplayed({ timeout: 30000 });
            await this.doneWheelSelector.click();
        }

        await this.loginPasswordDropdownSelector.waitForDisplayed({ timeout: 30000 });
        await this.loginPasswordDropdownSelector.click();

        if (driver.isAndroid) {
            await this.loginPasswordSelector.waitForDisplayed({ timeout: 30000 });
            await this.loginPasswordSelector.click();
        } else {
            await this.loginPasswordSelector.waitForDisplayed({ timeout: 30000 });
            await this.loginPasswordSelector.addValue(password);
            await this.doneWheelSelector.waitForDisplayed({ timeout: 30000 });
            await this.doneWheelSelector.click();
        }

        await this.signInButtonSelector.waitForDisplayed({ timeout: 30000 });
        await this.signInButtonSelector.click();
    } 

    async verifyLoggedInState () {
        await this.burgerMenuSelector.waitForDisplayed({ timeout: 30000 });
        await this.burgerMenuSelector.click();

        await expect(await this.welcomeMessageSelector.getText()).to.equal("Welcome demouser");
    }

    get favouriteSelector () { 
        const selectorAndroid = '=new UiSelector().description("mark-favourite-12")';
        const selectorIOS = 'label == "" AND name == "mark-favourite-12"';
        const selectorType = driver.isAndroid ? 'android' : '-ios predicate string:';
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS;
        return $(`${selectorType}${selector}`);
     };

    get loginUsernameDropdownSelector () { return $(`~username-input`); }
    
    get loginUsernameSelector () { 
        const selectorAndroid = '=new UiSelector().resourceId("android:id/text1").text("demouser")';
        const selectorIOS = 'XCUIElementTypePicker[@name=\"ios_picker\"]/XCUIElementTypePickerWheel';
        const selectorType = driver.isAndroid ? 'android' : '//';
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS;
        return $(`${selectorType}${selector}`); 
    };

    get doneWheelSelector () {return $(`~done_button`); }

    get loginPasswordDropdownSelector () { return $(`~password-input`); }

    get loginPasswordSelector () {
        const selectorAndroid = '=new UiSelector().resourceId("android:id/text1").text("testingisfun99")';
        const selectorIOS = 'XCUIElementTypePicker[@name=\"ios_picker\"]/XCUIElementTypePickerWheel';
        const selectorType = driver.isAndroid ? 'android' : '//';
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS;
        return $(`${selectorType}${selector}`);
    }

    get signInButtonSelector () { 
        return $(`~login-btn`); 
     };

    get burgerMenuSelector () { 
        return $(`~menu`);
    }
    get welcomeMessageSelector () {
        return $(`~username`);
    }


}

export default new Login;