class ShippingPage {
    getDeliveryLocationInput() {
        return cy.get('#country')
    }
    selectCountryOption() {
        return cy.get('.suggestions > ul > li > a')
    }
    getTermsAndConditionsCheckbox() {
        return cy.get('#checkbox2')
    }
    getPurchaseButton() {
        return cy.get('input[value="Purchase"]')
    }

    getAlertSuccess() {
        return cy.get('.alert-success')
    }
}
export default ShippingPage;