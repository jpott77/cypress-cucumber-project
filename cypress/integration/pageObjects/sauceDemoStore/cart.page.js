class Cart {

    get itemsInCart() {
        return '.inventory_item_name'
    }

    get shoppingCartLink() {
        return 'a.shopping_cart_link'
    }

    get checkoutButton() {
        return 'button#checkout'
    }

    get continueButton() {
        return '#continue'
    }

    get finishButton() {
        return 'button#finish'
    }

    get cancelButton() {
        return 'button#cancel'
    }

    get continueShoppingButton() {
        return 'button#continue-shopping'
    }

    get firstNameField() {
        return 'input#first-name'
    }

    get lastNameField() {
        return 'input#last-name'
    }

    get postalCodeField() {
        return 'input#postal-code'
    }

    get checkoutHeader() {
        return '#checkout_complete_container h2.complete-header'
    }

    checkout(fName, lName, postalCode, headerMsg) {
        cy.get(this.checkoutButton).click();
        cy.get(this.firstNameField).type(fName);
        cy.get(this.lastNameField).type(lName);
        cy.get(this.postalCodeField).type(postalCode);
        cy.get(this.continueButton).click();
        cy.get(this.finishButton).click();
        cy.get(this.checkoutHeader).contains(headerMsg);
    }
}
module.exports = new Cart()