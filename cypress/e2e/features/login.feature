Feature: Login Functionality
    As a user, I want to log in to the SauceDemo website
    Background:
        Given I am on the login page of the SauceDemo website

    Scenario: SignIn with valid  credential
        When I enter valid credential
            | userName      | password     |
            | standard_user | secret_sauce |
        #| performance_glitch_user | secret_sauce |
        Then I am redirected to the inventory Page

    Scenario Outline: SignIn with invalid fields
        When I fill out the form with invalid fields <userName>, <password>
        Then I should verify that <msgExpected> is displayed
        Examples:
            | userName        | password     | msgExpected                                                               |
            |                 |              | Epic sadface: Username is required                                        |
            |                 | secret_sauce | Epic sadface: Username is required                                        |
            | locked_out_user |              | Epic sadface: Password is required                                        |
            | standard_user   | mdp123       | Epic sadface: Username and password do not match any user in this service |
            | locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out.                       |
            | locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out.                       |


