enum CalculationOperationsTypes {
  add = 'add',
  subtract = 'subtract',
  multiply = 'multiply',
  divide = 'divide'
}

type CalculationOperations = Record<CalculationOperationsTypes, number>

const notAllowedError = { msg: 'Operation not allowed. Numbers cannot be divided by zero!' }

function isOperationAllowed(operationType: CalculationOperationsTypes, firstNum: number, secondNum: number): boolean {
  const isDivideOperation = operationType === CalculationOperationsTypes.divide
  const thereArgsWithZero = [firstNum, secondNum].includes(0)
  return !(isDivideOperation && thereArgsWithZero)
}

function calculate(operationType: CalculationOperationsTypes, firstNum: number, secondNum: number): number {
  const operations: CalculationOperations = {
    [CalculationOperationsTypes.add]: (firstNum + secondNum),
    [CalculationOperationsTypes.subtract]: (firstNum - secondNum),
    [CalculationOperationsTypes.multiply]: (firstNum * secondNum),
    [CalculationOperationsTypes.divide]: (firstNum / secondNum)
  }
  if (!isOperationAllowed(operationType, firstNum, secondNum)) throw new Error(notAllowedError.msg)
  return operations[operationType]
}

// Exec

;(() => {
  console.log(calculate(CalculationOperationsTypes.add, 10, 5))
  console.log(calculate(CalculationOperationsTypes.divide, 10, 0))
})()
