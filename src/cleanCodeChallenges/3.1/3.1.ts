type Product = {
  name: string
  price: number
}

function isProductExpensive(price: number): boolean {
  return price > 100
}

function createExpensiveProductMessage(productName: string): string {
  return `${productName} is expensive`
}

export function logExpensiveProducts(products: Product[]): void {
  products.forEach(({ name, price }) => {
    if (isProductExpensive(price)) console.log(createExpensiveProductMessage(name))
  })
}
