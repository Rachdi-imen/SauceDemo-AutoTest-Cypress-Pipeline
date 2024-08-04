import inputsAndBtns from "../pageElements/sauceDemoWebElements";
class Login {

    visitLoginPage() {
        cy.visit("https://www.saucedemo.com/v1/index.html");
        //Assertion
        cy.get(inputsAndBtns.logoSwagLabs).should('have.css', 'margin-top', '30px');
        cy.get(inputsAndBtns.logoSwagLabs).should('have.css', 'text-align', 'center');
        cy.get(inputsAndBtns.logoSwagLabs).should('have.css', 'padding', '30px 0px');
    }
    enterLoginDetails(userName, password) {
        cy.get(inputsAndBtns.inputUserName)
            .should('be.visible')
            .clear()
            .type(userName)
            .should('have.value', userName);

        cy.get(inputsAndBtns.inputPassword)
            .should('be.visible')
            .clear()
            .type(password)
            .should('have.value', password);

        cy.get(inputsAndBtns.loginBtn)
            .should('be.visible')
            .click();
    }

    assertInventoryPage() {
        cy.url().should('include', 'https://www.saucedemo.com/v1/inventory.html');
        cy.get('#inventory_filter_container .product_label').should('contain', 'Products');
    }


    failedLoginIn(userName, password) {
        if (userName) cy.get(inputsAndBtns.inputUserName).type(userName);
        if (password) cy.get(inputsAndBtns.inputPassword).type(password);
        cy.get(inputsAndBtns.loginBtn)
            .click()
            .then(() => {
                cy.get(inputsAndBtns.errorBtn).should('exist');

            });
    }

    checkErrorMsgForInvalidFields(msgExpected) {
        cy.get(inputsAndBtns.errorMsg).should('contain', msgExpected);

    }

   






}
export default new Login();