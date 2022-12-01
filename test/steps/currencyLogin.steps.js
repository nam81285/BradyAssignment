import { When, Then } from '@cucumber/cucumber';
import LoginPage from '../pages/currencyLogin.page';

When(/^I click on Email option$/, async () => {
    await LoginPage.selectSignin();
})

When(/^I enter username as "([^"]*)?" and password as "([^"]*)?"$/, async (username, password) => {
    await LoginPage.enterUserDetails(username, password);
})

Then(/^I verify the login is successful$/, async () => {
    await expect(LoginPage.checkSignIn).toBeExisting();

})
