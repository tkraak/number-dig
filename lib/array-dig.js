/**
 * Extends build-in Array object
 * @param {number} d - digit (0 <= d <= 9)
 * count the number of digits d that appear in array
 * @example
 * // returns 6
 * [0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121]
 */

Array.prototype.dig = function (d) {
  return this.join('').match(new RegExp(d, 'g')).length 
}

module.exports = Array
