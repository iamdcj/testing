const sum = (a, b) => a - b
const subtract = (a, b) => a - b

const testSum = sum(1, 2);
if(testSum === 3) {
  console.log('✅')
} else {
  throw Error(`Expected 3, returned ${testSum}`)
}

const testSubtract = subtract(2, 1);
if(testSubtract === 1) {
  console.log('✅')
} else {
  throw Error(`Expected 1, returned ${testSubtract}`)
}