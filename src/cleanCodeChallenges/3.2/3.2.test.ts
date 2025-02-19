import { describe, expect, it } from 'vitest'
import { calculateDiscount, discountFactory, DiscountType } from './3.2'

describe('Clean code challenge tests: 3.2', () => {
  it('Should apply a 20% discount for premium customers when price is greater than 100', () => {
    const price = 150
    const expectedDiscount = 0.8
    const expectedPriceWithDiscount = price * expectedDiscount
    const discount = discountFactory().getDiscountByType(DiscountType.premium)(price)
    const finalPrice = calculateDiscount(price, discount)
    expect(finalPrice).toBe(expectedPriceWithDiscount)
  })
  it('Should apply a 10% discount for premium customers when price is less than or equal to 100', () => {
    const price = 70
    const expectedDiscount = 0.9
    const expectedPriceWithDiscount = price * expectedDiscount
    const discount = discountFactory().getDiscountByType(DiscountType.premium)(price)
    const finalPrice = calculateDiscount(price, discount)
    expect(finalPrice).toBe(expectedPriceWithDiscount)
  })
  it('Should apply a 10% discount for non-premium customers when price is greater than 100', () => {
    const price = 150
    const expectedDiscount = 0.9
    const expectedPriceWithDiscount = price * expectedDiscount
    const discount = discountFactory().getDiscountByType(DiscountType.regular)(price)
    const finalPrice = calculateDiscount(price, discount)
    expect(finalPrice).toBe(expectedPriceWithDiscount)
  })
  it("Shouldn't apply any discount for non-premium customers when price is less than or equal to 100", () => {
    const price = 80
    const expectedPriceWithDiscount = price
    const discount = discountFactory().getDiscountByType(DiscountType.regular)(price)
    const finalPrice = calculateDiscount(price, discount)
    expect(finalPrice).toBe(expectedPriceWithDiscount)
  })
  it("Shouldn't apply any discount when the price is zero or below", () => {
    const price = 0
    const discount = discountFactory().getDiscountByType(DiscountType.regular)(price)
    expect(() => calculateDiscount(price, discount)).toThrow('Operation not supported. Please provide a value greater than 0!')
  })
})
