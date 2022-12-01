import { When, Then } from '@cucumber/cucumber';
import LogoutPage from '../pages/currencyLogout.page';

Then(/^I click logout from the site$/, async () => {
    await LogoutPage.clickLogout();
})