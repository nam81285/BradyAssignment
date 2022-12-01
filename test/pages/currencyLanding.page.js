'use strict'
import cucumberJson from 'wdio-cucumberjs-json-reporter';
class LandingPage {

    /**
     * Selectors
     */

    get userSelect () {
        return $('.tv-header__user-menu-button');        
    }
    get selectSignIn () {
        return $('.itemInfo-TZ2SJ2fG > .label-K12_SJ0T');
    }
    get checkLogin () {
        return $('.tv-signin-dialog__toggle-email > .tv-social__title');
    }

  /**
  * Methods
  */
    open () {
        return browser.url(`https://www.tradingview.com/markets/currencies/rates-all/`);
    }
    async selectSignin () {
        await this.userSelect.click();
        await browser.pause(1000);
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
        await this.selectSignIn.click();
        await browser.pause(1000);
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }
}

export default new LandingPage();