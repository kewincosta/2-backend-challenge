type Data = {
  id: number
  name: string
}

function extractValues<T, K extends keyof T>(objectArray: T[], targetPath: K): T[K][] {
  return objectArray.map(obj => obj[targetPath])
}

// Exec

;(() => {
  const data = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]
  const extractedValues = extractValues<Data, 'name'>(data, 'name')
  console.log(extractedValues)
})()
