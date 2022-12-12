
const isMultipleOfThree = (number: number) => {
  return number % 3 === 0;
}

const isMultipleOfFive = (number: number) => {
  return number % 5 === 0;
}

export function fizzbuzz (number: number) {
  if (number < 1) throw new Error('Too small');
  if (number > 100) throw new Error('Too large');
  if (isMultipleOfThree(number) && isMultipleOfFive(number)) return 'fizzbuzz';
  if (isMultipleOfThree(number)) return 'fizz';
  if (isMultipleOfFive(number)) return 'buzz';
  return ""
}