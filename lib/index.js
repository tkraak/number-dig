/**
 * @param {number} n - integer (n >= 0)
 * @param {number} d - digit (0 <= d <= 9)
 * square all numbers k between 0 and n (0 <= k <= n)
 * count the number of digits d used in the k*k's

 * example
 *
 * n = 10
 * d = 1
 * the k*k's are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
 * d of 1 appears in 1, 16, 81, 100
 * therefore, count is 4
 */

module.exports = function numberDig (n, d) {
  var squared = []
  for (var k = 0; k <= n; k++) {
    squared.push(k * k)
  }

  var count = squared.filter(containsOne)

  function containsOne (n) {
    return n.toString().includes(d)
  }

  return count.length
}
