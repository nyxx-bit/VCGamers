export class MarketPlacePage {
    txt_title_product = '.lp-product-title'
    btn_description_note = '.product-content > .row > .note-section-active'
    ipt_description_note = '[style="display: block;"] > .modal-box > .mbox-content > .input-wrapper > #notes'
    btn_save_note = '[style="display: block;"] > .modal-box > .mbox-content > .btn-action-wrap > .primary'
    btn_buy = '.ringkasan > .button'
    btn_confirm = '.modal-box-action'

    clickProductCard(productName) {
        cy.get(this.txt_title_product, {timeout: 5000})
            .filter(`:contains(${productName})`)
            .click()
        
        cy.wait(5000)
    }

    inputDescription(description) {
        cy.get(this.btn_description_note, {timeout: 5000})
            .should('be.visible')
            .click()
        
        cy.get(this.ipt_description_note)
            .should('be.visible')
            .type(description)

        cy.get(this.btn_save_note, {timeout: 5000})
            .should('be.visible')
            .click()
    }

    checkOutProduct() {
        cy.get(this.btn_buy)
            .click()
        cy.get(this.btn_confirm)
            .click()
    }

}