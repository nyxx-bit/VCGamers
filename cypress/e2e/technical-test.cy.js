/// <reference types="cypress" />

import { LoginPage } from "../pages/login_page"
import { HomePage } from "../pages/home_page"
import { MarketPlacePage } from "../pages/marketplace_page"
import { DaganganPage } from "../pages/dagangan_page"

const loginPage = new LoginPage()
const homePage = new HomePage()
const marketPlacePage = new MarketPlacePage()
const daganganPage = new DaganganPage()

context('Technical Test VCGamers', () => {
    beforeEach(() => {
        cy.visit('https://app.vcgamers.com/')
    })
    
    it ('a user can search a product and checkout the product that user wanted', function() {
        loginPage.clickMasukorDaftar();
        loginPage.inputUsername('alkhawarismi989@gmail.com');
        loginPage.inputPassword('adminadmin');
        loginPage.clickMasuk();

        homePage.inputSearch('Mobile Legends');

        marketPlacePage.clickProductCard('Emote mobile legends');

        daganganPage.addToCart();
        daganganPage.seeCart();

        marketPlacePage.inputDescription('description');
        marketPlacePage.checkOutProduct();
    })
})
