/// <reference types="Cypress" />

import HomePage from './pageObjects/HomePage'
import ProductsPage from './pageObjects/ProductsPage'
import CartPage from './pageObjects/CartPage'
import ShippingPage from './pageObjects/ShippingPage'


describe('My seven Test', function () {

    before(function () {
        // Runs once before test   
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })
    it('My eight testcase', function () {
        const homePage = new HomePage()
        const productsPage = new ProductsPage()
        const cartPage = new CartPage()
        const shippingPage = new ShippingPage()

        cy.visit('https://rahulshettyacademy.com/angularpractice')

        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        homePage.getEditBox().should('have.attr', 'minlength', '2')
        homePage.getEntrepreneur().should('be.disabled')

        homePage.getShopButton().click()
        //Custom function from command.js to select a product from fixture
        this.data.productName.forEach(function (element) {
            cy.selectProduct(element)
        });

        productsPage.getCartButton().click()

        var sum = 0
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
            const amount = $el.text()
            var result = amount.split(" ")
            result = result[1].trim()
            sum = Number(sum) + Number(result)
        })
            .then(function () {
                cy.log(sum)
            })

        cy.get('h3 strong').then(function (element) {
            const amount = element.text()
            var result = amount.split(" ")
            var total = result[1].trim()
            expect(Number(total)).to.equal(sum)

        })

        cartPage.getCheckOutButton().click()
        shippingPage.getDeliveryLocationInput().type('Spain')
        Cypress.config('pageLoadTimeout', 10000)
        shippingPage.selectCountryOption().click()
        shippingPage.getTermsAndConditionsCheckbox().click({ force: true })
        shippingPage.getPurchaseButton().click()
        shippingPage.getAlertSuccess().then(function (element) {
            const actualText = element.text()
            expect(actualText.includes('Success! Thank you! Your order will be delivered in next few weeks :-).')).to.be.true
        })

    })
})