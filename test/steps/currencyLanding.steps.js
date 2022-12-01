import { Given, When, Then } from '@cucumber/cucumber';
import LandingPage from '../pages/currencyLanding.page';
import cucumberJson from 'wdio-cucumberjs-json-reporter';

Given(/^I navigate to the Currency trade site$/, async () => {
    await LandingPage.open();
    await browser.maximizeWindow()
    cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
})

When(/^I Click to signin to the site$/, async () => {
    await LandingPage.selectSignin();
   })

Then(/^I verify the login page$/, async () => {
    await expect(LandingPage.checkLogin).toBeExisting();
   // await expect(SecurePage.flashAlert).toHaveTextContaining('You logged into a secure area!');
})





