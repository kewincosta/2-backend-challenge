function isEven(number: number): boolean {
  return number % 2 === 0
}

function duplicateNumber(number: number): number {
  return number * 2
}

export function duplicateEvenNumbers(numbers: number[]): number[] {
  return numbers.filter(isEven).map(duplicateNumber)
}
