
export function calculateStats (numArray: number[]) {
  return {
    //@ts-ignore
    minValue: numArray.reduce((previousNum, currentNum) => previousNum < currentNum ? previousNum : currentNum, numArray),
    //@ts-ignore
    maxValue: numArray.reduce((previousNum, currentNum) => previousNum > currentNum ? previousNum : currentNum, numArray),
    numElements: numArray.length,
    //@ts-ignore
    averageValue: Number((numArray.reduce((prev, current) => prev + current) / numArray.length).toFixed(12))
  }
}