import BasePage from '../BasePage';

export default class ProductDetailsPage extends BasePage {
  static selectBundle = ':nth-child(2) > .v2-container > .js-bundle-list-container > :nth-child(1) > .js-bundle-product-item > .align-items-center > .col-md-5 > .js-variant-url'
  static addToCart = '.cb-bundle-layout__left > .cb-cart > .cb-tooltip-wrapper > #bundle-add-to-cart'
  static addVariant = '.components-section > :nth-child(1) > .cb-customizer-wrapper > .cb-customizer > .cb-customizer-footer > .v2-button--primary'
  static countVariant = 'div.cb-bundle-layout__left > div.section-slider > div > div:nth-child(1) >'

  static selectFirstBundle() {
    cy.get(this.selectBundle).click()
  }

  static selectVariants() {
    let countOfElements = 0;
    cy.get(this.countVariant).then($elements => {
      countOfElements = $elements.length;
      for (let cuenta = 1; cuenta <= countOfElements; cuenta++) {
        cy.get(`.components-section > :nth-child(1) > :nth-child(${cuenta}) > .cb-product-list-item-content`).click()
        cy.get(this.addVariant).click()
        BasePage.pause(1000)
      }
    });
  }

  static bundleAddCart() {
    cy.get(this.addToCart).click()
  }
}
