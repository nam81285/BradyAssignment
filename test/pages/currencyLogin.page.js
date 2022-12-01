'use strict'
import cucumberJson from 'wdio-cucumberjs-json-reporter';

class LoginPage {

    /**
     * Selectors
     */
    get emailBtn () {
        return $('.tv-signin-dialog__toggle-email > .tv-social__title');  //Showing use of CSS
    }

    get userName () {
       return $('//*[@name="username"]'); //Showing use of Xpath
    }
    get password () {
        return $('//*[@name="password"]'); 
     }
     get signInBtn () {
        return $('//*[@class="tv-button__loader"]');
     }
     get checkSignIn () {
        return $('span=Watchlist');
     }

  /**
  * Methods
  */
    async selectSignin () {
        await this.emailBtn.click();
        await browser.pause(2000);
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }
    async enterUserDetails (username,password) {
        await this.userName.doubleClick();
        await this.userName.setValue(username);
        await this.password.doubleClick();
        await this.password.setValue(password);
        await this.signInBtn.click();
        await browser.pause(2000);
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }
}

export default new LoginPage();