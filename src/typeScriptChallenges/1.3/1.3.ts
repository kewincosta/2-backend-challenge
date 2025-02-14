function makeAllPositive(numbers: number[]): number[] {
  return numbers.map(number => Math.abs(number))
}

// exec

;(() => {
  const numbers: number[] = [-1, 2, -3, 4] // It doesn't suffer from mutability because it is an array of primitive types.
  console.log(makeAllPositive(numbers))
  console.log(numbers)
})()
