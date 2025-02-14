type CalculationOperationsTypes = 'add' | 'subtract' | 'multiply' | 'divide'

type CalculationOperations = Record<CalculationOperationsTypes, number>

const notAllowedError = { msg: 'Operation not allowed. Numbers cannot be divided by zero!' }

function isOperationAllowed(operationType: CalculationOperationsTypes, firstNum: number, secondNum: number): boolean {
  const isDivideOperation = operationType === 'divide'
  const thereArgsWithZero = [firstNum, secondNum].includes(0)
  return !(isDivideOperation && thereArgsWithZero)
}

function calculate(operationType: CalculationOperationsTypes, firstNum: number, secondNum: number): number {
  const operations: CalculationOperations = {
    add: (firstNum + secondNum),
    subtract: (firstNum - secondNum),
    multiply: (firstNum * secondNum),
    divide: (firstNum / secondNum)
  }
  if (!isOperationAllowed(operationType, firstNum, secondNum)) throw new Error(notAllowedError.msg)
  return operations[operationType]
}

// Exec

;(() => {
  console.log(calculate('add', 10, 5))
  console.log(calculate('divide', 10, 0))
})()
