'use strict'
import cucumberJson from 'wdio-cucumberjs-json-reporter';

class SelectionPage {

    /**
     * Selectors
     */
    get continent () {
       // return $('.tv-category-tab:nth-child(7) > .tv-category-tab__title');  //Showing use of CSS
        return $('div=Asia');
    }

    get searchBar () {
       return $('(//input[@type="text"])[3]'); //Showing use of Xpath
       //#js-screener-container > div.tv-data-table-sticky-wrapper.tv-screener-sticky-header-wrapper.tv-screener-sticky-header-wrapper--standalone_sticky.tv-screener-sticky-header-wrapper--markets_absolute > table > thead > tr > th.tv-data-table__th.tv-data-table__cell.js-tv-data-table-th.js-tv-data-table-th-name.tv-data-table__sortable.tv-screener-table__sortable.tv-screener-table__th.tv-screener-table__th--big.js-draggable > div > div > div.tv-screener-table__search-query.js-search-query.tv-screener-table__search-query--without-description > input
    }
    get price () {
        return $('#js-screener-container > div.tv-screener__content-pane > table > tbody > tr > td:nth-child(2)> span'); 
        //#js-screener-container > div.tv-screener__content-pane > table > tbody > tr:nth-child(1) > td:nth-child(2) > span
     }

  /**
  * Methods
  */
    async selectContinent () {
        await this.continent.click();
        await browser.pause(2000);
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }
    async searchCurrencyCountry (currencyCountry) {
        await this.searchBar.click();
        await this.searchBar.setValue(currencyCountry);
        await this.searchBar.keys("Enter");
        await browser.pause(5000);
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }
    async captureCurrenyCurrentRate () {
        const currenyCurrentRate = await this.price.getText();
        console.log('Current price for GBPJPY is', currenyCurrentRate);
        cucumberJson.attach('Current price for GBPJPY is: '+ currenyCurrentRate,'text/plain');
    }
}

export default new SelectionPage();