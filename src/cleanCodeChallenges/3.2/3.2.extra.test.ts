import { describe, expect, it } from 'vitest'
import { DiscountCalculator, DiscountFactory, DiscountType } from './3.2.extra';

describe('Clean code challenge tests: 3.2 extra', () => {
  it('Should apply a 20% discount for premium customers when price is greater than 100', () => {
    const price = 150
    const expectedDiscount = 0.8
    const expectedPriceWithDiscount = price * expectedDiscount
    const premiumDiscount = DiscountFactory.getDiscount(DiscountType.premium)
    const discountCalculator = new DiscountCalculator(premiumDiscount)
    const finalPrice = discountCalculator.calculate(price)
    expect(finalPrice).toBe(expectedPriceWithDiscount)
  })
  it('Should apply a 10% discount for premium customers when price is less than or equal to 100', () => {
    const price = 70
    const expectedDiscount = 0.9
    const expectedPriceWithDiscount = price * expectedDiscount
    const premiumDiscount = DiscountFactory.getDiscount(DiscountType.premium)
    const discountCalculator = new DiscountCalculator(premiumDiscount)
    const finalPrice = discountCalculator.calculate(price)
    expect(finalPrice).toBe(expectedPriceWithDiscount)
  })
  it('Should apply a 10% discount for non-premium customers when price is greater than 100', () => {
    const price = 150
    const expectedDiscount = 0.9
    const expectedPriceWithDiscount = price * expectedDiscount
    const regularDiscount = DiscountFactory.getDiscount(DiscountType.regular)
    const discountCalculator = new DiscountCalculator(regularDiscount)
    const finalPrice = discountCalculator.calculate(price)
    expect(finalPrice).toBe(expectedPriceWithDiscount)
  })
  it("Shouldn't apply any discount for non-premium customers when price is less than or equal to 100", () => {
    const price = 80
    const expectedPriceWithDiscount = price
    const regularDiscount = DiscountFactory.getDiscount(DiscountType.regular)
    const discountCalculator = new DiscountCalculator(regularDiscount)
    const finalPrice = discountCalculator.calculate(price)
    expect(finalPrice).toBe(expectedPriceWithDiscount)
  })
  it("Shouldn't apply any discount when the price is zero or below", () => {
    const price = 0
    const regularDiscount = DiscountFactory.getDiscount(DiscountType.regular)
    const discountCalculator = new DiscountCalculator(regularDiscount)
    expect(() => discountCalculator.calculate(price)).toThrow('Operation not supported. Please provide a value greater than 0!')
  })
})
