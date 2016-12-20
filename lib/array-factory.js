/**
 * Creates a new ArrayFactory
 * @constructor
 * @param {Number} n - integer (n >= 0)
 * @returns {Array}
 * Square all numbers i between 0 and n (0 <= k <= n)
 * @example
 * // returns  [0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
 * new ArrayFactory(10)
 */

function ArrayFactory (n) {
  this.n = n
}

ArrayFactory.prototype.square = function () {
  var result = []
  for (var i = 0; i <= this.n; i++) {
    result.push(i * i)
  }
  return result
}

module.exports = ArrayFactory

