import { Then } from '@badeball/cypress-cucumber-preprocessor'
import cart from '../../pageObjects/sauceDemoStore/cart.page'

Then('the user is able to checkout with the {string} item in their cart', (itemName) => {
    cy.get(cart.shoppingCartLink).click();
    cy.get(cart.itemsInCart).contains(itemName);

    const fName = 'John', lName = 'Doe', postalCode = '12345', headerMsg = 'THANK YOU FOR YOUR ORDER';
    cart.checkout(fName, lName, postalCode, headerMsg);
});