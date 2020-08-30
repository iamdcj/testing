const {sum, subtract} = require('./math')

function test(title, callback) {
  try {
    callback();
    console.log('✅', title )
  } catch (error) {
    console.error('❌', title, error.message)
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    },
  }
}

test('subtract', () => {
  result = subtract(7, 3)
  expected = 4

  expect(result).toBe(expected)
})

test('sum', () => {
  result = sum(3, 7)
  expected = 10

  expect(result).toBe(expected)
})