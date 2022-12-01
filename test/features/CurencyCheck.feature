Feature: Test Trading View website to check Forex rate
    As a Developer in Test
    I want to test and capture the current forex value for GBPJPY
    
@BradyAssignment
    Scenario Outline: As a user I want to test login to TradingView wevbsite, click on Asia and search GBPJPY exchange rate and capture the currency rate for GBPJPY
        Given I navigate to the Currency trade site
        When  I Click to signin to the site
        Then  I verify the login page
        When I click on Email option
        When I enter username as "<username>" and password as "<password>"
        Then I verify the login is successful
        When I select the Continent for forex market
        When I search for the Currency Country "<currencyCountry>"
        Then I capture and print the currency current rate
        And I click logout from the site

        Examples:
            | username  | password              | currencyCountry| 
            | TestUserBrady1234     | TestUserBrady@1234  |GBPJPY| 