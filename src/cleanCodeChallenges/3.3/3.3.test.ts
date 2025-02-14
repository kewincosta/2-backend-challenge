import { describe, expect, it } from 'vitest'
import { duplicateEvenNumbers } from './3.3'

describe('Clean code challenge tests: 3.3', () => {
  it('Should double the even numbers and return them', () => {
    const numbers: number[] = [-2, -1, 0, 1, 2, 3, 4, 5]
    const result = duplicateEvenNumbers(numbers)
    expect(result).toEqual([-4, 0, 4, 8])
  })
  it("Shouldn't double the numbers if they are not even", () => {
    const numbers: number[] = [1, 3, 5]
    const result = duplicateEvenNumbers(numbers)
    expect(result).toEqual([])
  })
  it("Shouldn't double the numbers if they do not exist", () => {
    const numbers: number[] = []
    const result = duplicateEvenNumbers(numbers)
    expect(result).toEqual([])
  })
})
