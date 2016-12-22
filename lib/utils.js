/**
 * For illustration purposes only!
 * DO NOT EXTEND BUILD-IN PROTOTYPES
 * Extends build-in Array prototype
 * @param {number} d - digit (0 <= d <= 9)
 * count the number of digits d that appear in array
 * @example
 * // returns 6
 * [0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121]
 */

exports.dig = function () {
  Array.prototype.dig = function (d) {
    return this.join('').match(new RegExp(d, 'g')).length
  }
}

exports.numbers = function (n) {
  var numbers = []
  for (var i = 0; i <= n; i++) {
    numbers.push(i)
  }
  return numbers
}

exports.square = function (n) {
  return n * n
}

