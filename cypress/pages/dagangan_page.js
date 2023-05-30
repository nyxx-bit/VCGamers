export class DaganganPage {
    btn_add_to_cart = '.add-cart > .button'
    btn_see_cart = '.modal-box-sidebar-footer > .primary'

    addToCart() {
        cy.get(this.btn_add_to_cart)
            .click()
    }

    seeCart() {
        cy.get(this.btn_see_cart, {timeout: 5000})
            .should('be.visible')
            .click()

        cy.wait(5000)
    }
}