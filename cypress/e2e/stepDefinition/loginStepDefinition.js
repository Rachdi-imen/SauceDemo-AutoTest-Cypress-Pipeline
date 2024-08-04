import Login from "../../pageObjects/pageActions/loginActions"
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"

Given(/^I am on the login page of the SauceDemo website/, () => {
    Login.visitLoginPage();
  });
  
  When(/^I enter valid credential/, (table) => {
  
    table.hashes().forEach(row => {
      Login.enterLoginDetails(row.userName, row.password)
    })
  });

  Then(/^I am redirected to the inventory Page/, () => {
    Login.assertInventoryPage();
  });

  When(/^I fill out the form with invalid fields (.*), (.*)/, (userName, password) => {
    Login.failedLoginIn(userName, password);
  });
  
  Then(/^I should verify that (.+) is displayed/, (msgExpected) => {
   Login.checkErrorMsgForInvalidFields(msgExpected);
  });

  