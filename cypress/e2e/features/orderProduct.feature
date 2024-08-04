Feature: Cart Management and Checkout Process
  As a logged-in customer, I want to add one product to my cart and complete the checkout process

  Background:
    Given I am on the login page of the SauceDemo website
    When I enter valid credential
      | userName      | password     |
      | standard_user | secret_sauce |
    Then I am redirected to the inventory Page

  Scenario: Adding one item to the cart and completing the checkout
    When I click on the image of the Sauce Labs Backpack item
    Then I am redirected to the page describing the item 
    When I click on the Add to Cart button for the Sauce Labs Backpack product
    Then I expect to see the cart icon indicating that there is 1 item
    And I should see the Remove button instead of the Add to Cart button
    When I click on the cart icon on the inventory page
    Then I should be redirected to the cart list page
    And I should see the details of the added product, which include its price, quantity, and description
    When I proceed to checkout
    Then I should be redirected to the Checkout Information page
    When I enter the following details
      | firstName | lastName | postalCode |
      | Imen      | Rachchdi | 152        |
    And I click on the Continue button
    Then I should be redirected to the checkout overview page
    And I should see all payment and shipping information correctly displayed
    When I click on the Finish button
    Then I should see the message THANK YOU FOR YOUR ORDER