class Inventory {

    get inventoryList() {
        return '.inventory_list'
    }

    get addToCart() {
        return '#add-to-cart-sauce-labs-'
    }

    get removeFromCart() {
        return '#remove-sauce-labs-'
    }

    get removeFromCartButton() {
        return '.cart_item button.cart_button'
    }

    get shoppingCartLink() {
        return 'a.shopping_cart_link'
    }

}
module.exports = new Inventory()