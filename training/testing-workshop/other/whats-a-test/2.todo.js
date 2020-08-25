const {sum, subtract} = require('./math')

function expect(result) {
  return {
    toBe(expected) {
      if (result !== expected) {
        throw new Error(`${result} is not equal to ${expected}`)
      } else {
        console.log('✅ All good!')
      }
    }
  }
}

expect(sum(3, 7)).toBe(10);
expect(subtract(7, 3)).toBe(4);