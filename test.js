const { sum, divide, subtract, multiply} = require('./utils/index')
const assert = require('assert')

it('should return true', () => {
  assert.equal(true, true)
})

it('correctly calculates the sum of 2 and 2', () => {
  assert.equal(sum(2,2), 4)
})

it('correctly calculates the subtract of 2 and 2', () => {
  assert.equal(subtract(2,2), 0)
})

it('correctly calculates the multiply of 2 and 2', () => {
  assert.equal(multiply(2,2), 4)
})

it('correctly calculates the divide of 2 and 0', () => {
  assert.equal(divide(2,0), null)
})