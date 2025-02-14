export enum DiscountType {
  regular = 'regular',
  premium = 'premium'
}

abstract class DiscountStrategy {
  public abstract calculate(price: number): number
}

class PremiumDiscount implements DiscountStrategy {
  private discountAbove100: number = 0.8
  private discountBelow100: number = 0.9

  public calculate(price: number): number {
    const isPriceAbove100 = this.isPriceAbove100(price)
    if (isPriceAbove100) return this.applyDiscount(price, this.discountAbove100)
    return this.applyDiscount(price, this.discountBelow100)
  }

  private isPriceAbove100(price: number): boolean {
    return price > 100
  }

  private applyDiscount(price: number, discountRate: number): number {
    return price * discountRate
  }
}

class RegularDiscount implements DiscountStrategy {
  private discountAbove100: number = 0.9
  private discountBelow100: number = 1

  public calculate(price: number): number {
    const isPriceAbove100 = this.isPriceAbove100(price)
    if (isPriceAbove100) return this.applyDiscount(price, this.discountAbove100)
    return this.applyDiscount(price, this.discountBelow100)
  }

  private isPriceAbove100(price: number): boolean {
    return price > 100
  }

  private applyDiscount(price: number, discountRate: number): number {
    return price * discountRate
  }
}

export class DiscountFactory {
  private static discountStrategies: Record<DiscountType, DiscountStrategy> = {
    premium: new PremiumDiscount(),
    regular: new RegularDiscount(),
  }

  static getDiscount(discountType: DiscountType): DiscountStrategy {
    const discount = this.discountStrategies[discountType]
    return discount
  }
}

export class DiscountCalculator {
  constructor(private discount: DiscountStrategy) {}

  public calculate(price: number): number {
    if (price <= 0) throw new Error('Operation not supported. Please provide a value greater than 0!')
    return this.discount.calculate(price)
  }
}
