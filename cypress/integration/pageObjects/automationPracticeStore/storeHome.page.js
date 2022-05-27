class Home{
    get womenMenuOption(){
        return '.sf-menu > :nth-child(1) > a[title="Women"]'
    }

    get dressesMenuOption(){
        return '.sf-menu > :nth-child(2) > a[title="Dresses"]'
    }

    get tshirtMenuOption(){
        return '.sf-menu > :nth-child(3) > a[title="T-shirts"]'
    }

    get searchBox(){
        return '#search_query_top'
    }

    get searchBoxButton (){
        return '#searchbox > .btn'
    }

    get productListTitle (){
        return '.product_list h5 a'
    }

    get alert(){
        return '.alert'
    }

    get colourFilterLabels(){
        return '.layered_color a'
    }

  /**
   * Clicks a menu option
   *
   * @param {String} option - Name of the menu option to click
   */
  selectMenuOption(option) {
    switch (option) {
      case "Women":
        cy.get(this.womenMenuOption).click()
        break;
      case "Dresses":
        cy.get(this.dressesMenuOption).click()
        break;
      case "T-Shirts":
        cy.get(this.tshirtMenuOption).click()
        break;
      default:
        console.log(`Invalid Option ${option}`);
    }
  }
}
module.exports = new Home()