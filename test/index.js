const test = require('ava')
const numberDig = require('../lib/index')

test('square numbers between 0 - 10 and filter for 1', (t) => {
  t.is(numberDig(10, 1), 4)
})
