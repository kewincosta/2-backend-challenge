function validateInputs<T, K extends keyof T>(objectArray: T[], targetPath: K): void {
  if (!objectArray) throw new Error('The argument objectArray is required')
  if (!targetPath) throw new Error('The argument targetPath is required')
  if (!Array.isArray(objectArray)) throw new Error('Expected an array for the argument objectArray')
  if (typeof targetPath !== 'string') throw new Error('Expected a string for the argument targetPath')
  if (objectArray.length === 0) throw new Error('The argument objectArray should not be empty')
}

function extractValues<T, K extends keyof T>(objectArray: T[], targetPath: K): T[K][] {
  validateInputs(objectArray, targetPath)
  return objectArray.map(obj => obj[targetPath])
}

// Exec

const exec = async<T, K extends keyof T>(data: T[], targetPath: K): Promise<void> => {
  const extractedValues = extractValues<T, K>(data, targetPath)
  console.log(extractedValues)
}

;(async() => {
  const execCases = await Promise.allSettled([
    exec([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }], 'name'), // success case
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    exec(undefined, 'name'), // err case
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    exec([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }], ''),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    exec([], 'name'), // err case
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    exec({}, 'name'), // err case
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    exec([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }], 1), // err case
  ])
  console.log(execCases)
})()
