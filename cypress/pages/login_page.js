export class LoginPage {

    btn_masukdaftar = '.action-list > .button'
    ipt_username = '[style="display:;"] > form.w-full > [type="text"]'
    ipt_password = '[style="display:;"] > form.w-full > .relative > .py-4'
    btn_masuk = '[style="display:;"] > form.w-full > .btn-submit'

    clickMasukorDaftar () {
        cy.get(this.btn_masukdaftar, {timeout: 10000})
            .click();
    }

    inputUsername(username) {
        cy.get(this.ipt_username)
            .type(username).should('have.value', username);
    }

    inputPassword(password) {
        cy.get(this.ipt_password)
            .type(password).should('have.value', password);
    }

    clickMasuk () {
        cy.get(this.btn_masuk)
            .click();
        
        cy.wait(10000)
    }
}