export class HomePage {
    ipt_search_box = '.interactive-input > input'

    inputSearch(keyword) {
        cy.get(this.ipt_search_box)
            .should('be.visible')
            .type(`${keyword}{enter}`);
    }
}