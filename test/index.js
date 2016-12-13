const test = require('ava')
const numberDig = require('../lib/index')

test('square numbers between 0 - 10 and filter for 1', (t) => {
  t.is(numberDig(10, 1), 4)
})

test('account for multiple instances of d in a squared number', (t) => {
  t.is(numberDig(11, 1), 6)
})
