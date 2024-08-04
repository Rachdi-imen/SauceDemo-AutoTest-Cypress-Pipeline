import inputsAndBtns from "../pageElements/sauceDemoWebElements";
class CartManagement {

    clickOnItemImg() {
        cy.get('#item_4_img_link')
        
            .click({force : true});
    }

    checkItemPageDescription() {
        cy.url()
            .should('contain', "https://www.saucedemo.com/v1/inventory-item.html?id=4");
        //cy.get('.inventory_details_img').should('be.visible');

    }

    clickOnaddToCartBtn() {
        cy.get('.btn_primary.btn_inventory').click();
    }

    checkCartContainsOneItem() {
        cy.get('.fa-layers-counter.shopping_cart_badge').should('contain.text', '1');

    }

    assertBtnContainsRemoveText() {
        cy.get('.btn_inventory.btn_secondary').should('contain', 'REMOVE');

    }


    clickOnCartIcon() {
        cy.get('.shopping_cart_link.fa-layers.fa-fw').click();

    }

    assertCartListPage() {
        cy.url().should('include', 'https://www.saucedemo.com/v1/cart.html');
        cy.get('.subheader').should('contain.text', 'Your Cart');
    }

    assertItemDetails() {
        cy.get('.cart_quantity').should('contain.text', '1');
        cy.get('.inventory_item_name').should('contain.text', 'Sauce Labs Backpack');
        cy.get('.inventory_item_desc').should('contain.text', 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
        cy.get('.inventory_item_price').should('contain.text', '29.99');

    }
    clickOnCheckOutBtn() {
        cy.get('a.btn_action.checkout_button[href="./checkout-step-one.html"]').click();

    }

    assertCheckoutInformationPage() {
        cy.url().should('contain', 'https://www.saucedemo.com/v1/checkout-step-one.html');
        cy.get('.subheader').should('contain.text', 'Checkout: Your Information');

    }

    inputCheckoutInfo(firstName, lastName, postalCode) {
        cy.get(inputsAndBtns.inputFirstName).type(firstName);
        cy.get(inputsAndBtns.inputLastName).type(lastName);
        cy.get(inputsAndBtns.inputPostalCode).type(postalCode);

    }
clickOnContinueBtn(){
    cy.get('input.btn_primary.cart_button[value="CONTINUE"]').click();

}

assertCheckoutOverviewPage()
{
    cy.url().should('contain','https://www.saucedemo.com/v1/checkout-step-two.html')
    cy.get('.subheader').should('contain.text', 'Checkout: Overview'); 
}

checkPaymentInfo(){
    // Verify payment information
    cy.get('.summary_info_label').eq(0).should('contain.text', 'Payment Information:');
    cy.get('.summary_value_label').eq(0).should('contain.text', 'SauceCard #31337');
    
    // Verify shipping information
    cy.get('.summary_info_label').eq(1).should('contain.text', 'Shipping Information:');
    cy.get('.summary_value_label').eq(1).should('contain.text', 'FREE PONY EXPRESS DELIVERY!');
    
    // Verify item total
    cy.get('.summary_subtotal_label').should('contain.text', 'Item total: $29.99');
    
    // Verify tax
    cy.get('.summary_tax_label').should('contain.text', 'Tax: $2.40');
    
    // Verify total
    cy.get('.summary_total_label').should('contain.text', 'Total: $32.39');

}

clickOnFinishBtn(){
    cy.get('.btn_action.cart_button').click();
}

assertConfirmCheckoutPage(){
cy.get('.subheader').should('contain.text', 'Finish');
 // Assert the completion message
 cy.get('.complete-header').should('contain.text', 'THANK YOU FOR YOUR ORDER');
}



}

export default new CartManagement();