import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import inventory from '../../pageObjects/sauceDemoStore/inventory.page'
import cart from '../../pageObjects/sauceDemoStore/cart.page'

When('a user removes {string} from their cart', (itemName) => {
    const item = itemName.toLowerCase().trim().replace(' ', '-');
    console.log(`Selector:${item}`);
    cy.get(inventory.removeFromCart + item).click();
});

When('a user adds {string} to their cart', (itemName) => {
    const item = itemName.toLowerCase().trim().replace(' ', '-');
    console.log(`Selector:${item}`);
    cy.get(inventory.addToCart + item).click();
});

When('a user removes all items from their cart', () => {
    cy.get(inventory.shoppingCartLink).click();
    cy.get(inventory.removeFromCartButton).each((element) => {
        element.click();
    });
});

Then('the item {string} should be added to the cart', (itemName) => {
    cy.get(inventory.shoppingCartLink).click();
    cy.get(cart.itemsInCart).contains(itemName);
});

Then('the cart should be empty', () => {
    cy.get(inventory.shoppingCartLink).click();
    cy.get(cart.itemsInCart).should('not.exist');
});