import { When, Then } from '@cucumber/cucumber';
import SelectionPage from '../pages/currencySelection.page';

When(/^I select the Continent for forex market$/, async () => {
    await SelectionPage.selectContinent();
})
When(/^I search for the Currency Country "([^"]*)?"$/, async (currencyCountry) => {
    await SelectionPage.searchCurrencyCountry(currencyCountry);
})
Then (/^I capture and print the currency current rate$/, async () => {
    await SelectionPage.captureCurrenyCurrentRate();
})


