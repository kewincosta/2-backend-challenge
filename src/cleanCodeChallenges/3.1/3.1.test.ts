import { describe, it, vi, expect } from 'vitest'
import { logExpensiveProducts } from './3.1'

describe('Clean code challenge tests: 3.1', () => {
  it("Should iterate through the list of products and log a message when the product price is above 100.", () => {
    const products = [{ name: 'Cellphone', price: 101 }]
    const expectedLogMessage = `${products[0].name} is expensive`
    const consoleSpy = vi.spyOn(console, 'log')
    logExpensiveProducts(products)
    expect(consoleSpy).toHaveBeenCalledWith(expectedLogMessage)
    consoleSpy.mockRestore()
  })
  it("Should iterate through the list of products and not log a message when the price is below 100", () => {
    const products = [{ name: 'Cellphone', price: 100 }]
    const consoleSpy = vi.spyOn(console, 'log')
    logExpensiveProducts(products)
    expect(consoleSpy).not.toBeCalled()
    consoleSpy.mockRestore()
  })
})
