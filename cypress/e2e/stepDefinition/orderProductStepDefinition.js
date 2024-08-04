import CartManagement from "../../pageObjects/pageActions/orderProductActions";
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
When(/^I click on the image of the Sauce Labs Backpack item/, () => {

    CartManagement.clickOnItemImg();
});

Then(/^I am redirected to the page describing the item/, () => {

    CartManagement.checkItemPageDescription();
});

When(/^I click on the Add to Cart button for the Sauce Labs Backpack product/, () => {

    CartManagement.clickOnaddToCartBtn();
});

Then(/^I expect to see the cart icon indicating that there is 1 item/, () => {

    CartManagement.checkCartContainsOneItem();
});

And(/^I should see the Remove button instead of the Add to Cart button/, () => {

    CartManagement.assertBtnContainsRemoveText();
});

When(/^I click on the cart icon on the inventory page/, () => {

    CartManagement.clickOnCartIcon();
});

Then(/^I should be redirected to the cart list page/, () => {

    CartManagement.assertCartListPage();
});

And(/^I should see the details of the added product, which include its price, quantity, and description/, () => {

    CartManagement.assertItemDetails();
});

When(/^I proceed to checkout/, () => {

    CartManagement.clickOnCheckOutBtn();
});

Then(/^I should be redirected to the Checkout Information page/, () => {

    CartManagement.assertCheckoutInformationPage();
});



When(/^I enter the following details/, (table) => {

    table.hashes().forEach(row => {
      CartManagement.inputCheckoutInfo(row.firstName, row.lastName, row.postalCode)
    })
  });


And(/^I click on the Continue button/, () => {

    CartManagement.clickOnContinueBtn();
});

Then(/^I should be redirected to the checkout overview page/, () => {

    CartManagement.assertCheckoutOverviewPage();
});

And(/^I should see all payment and shipping information correctly displayed/, () => {

    CartManagement.checkPaymentInfo();
});


When(/^I click on the Finish button/, () => {

    CartManagement.clickOnFinishBtn();
});

Then(/^I should see the message THANK YOU FOR YOUR ORDER/, () => {

    CartManagement.assertConfirmCheckoutPage();
});