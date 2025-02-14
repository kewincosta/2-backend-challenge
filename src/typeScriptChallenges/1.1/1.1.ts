type Data = {
  id: number
  name: string
}

type ExtractValuesInput = Data[]

type ExtractValuesTargetPath = keyof Data

function extractValues<T>(objectArray: ExtractValuesInput, targetPath: ExtractValuesTargetPath): T[] {
  return objectArray.map<T>((object) => object[targetPath] as T)
}

// Exec

;(() => {
  const data: ExtractValuesInput = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]
  const extractedValues = extractValues<Data['name']>(data, 'name')
  console.log(extractedValues)
})()
