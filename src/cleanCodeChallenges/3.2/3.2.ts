type DiscountStrategy = (price: number) => number

interface DiscountFactory {
  getDiscountByType: (discountType: DiscountType) => DiscountStrategy
}

export enum DiscountType {
  premium = 'premium',
  regular = 'regular'
}

function isPriceAbove100(price: number): boolean {
  return price > 100
}

function createDiscount(price: number, discountAbove100: number, discountBelow100: number): number {
  return isPriceAbove100(price) ? discountAbove100 : discountBelow100
}

const premiumDiscount: DiscountStrategy = (price: number) => {
  const discountAbove100 = 0.8
  const discountBelow100 = 0.9
  return createDiscount(price, discountAbove100, discountBelow100)
}

const regularDiscount: DiscountStrategy = (price: number) => {
  const discountAbove100 = 0.9
  const discountBelow100 = 1
  return createDiscount(price, discountAbove100, discountBelow100)
}

export function discountFactory(): DiscountFactory {
  const discountStrategies: Record<DiscountType, DiscountStrategy> = {
    [DiscountType.premium]: premiumDiscount,
    [DiscountType.regular]: regularDiscount
  }
  return {
    getDiscountByType: (discountType: DiscountType) => discountStrategies[discountType]
  }
}

export function calculateDiscount(price: number, discount: number): number {
  if (price <= 0) throw new Error('Operation not supported. Please provide a value greater than 0!')
  return price * discount
}
