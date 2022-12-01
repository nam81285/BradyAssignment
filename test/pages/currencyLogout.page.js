'use strict'
import cucumberJson from 'wdio-cucumberjs-json-reporter';

class LogoutPage {

    /**
     * Selectors
     */
     get selectUser () {
        return $('.tv-header__user-menu-button-userpic'); 
    }

    get logout () {
       return $('button.item-RhC5uhZw:nth-child(14) > span:nth-child(1) > span:nth-child(1) > span:nth-child(1) > span:nth-child(1) > span:nth-child(1)');
    }
    

  /**
  * Methods
  */
    async clickLogout () {
        await this.selectUser.click();
        await browser.pause(2000);
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
         await this.logout.click();
         cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }
}

export default new LogoutPage();