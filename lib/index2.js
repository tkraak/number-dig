var numbers = require('./utils').numbers
var square = require('./utils').square

/**
 * @param {Number} n (n >= 0)
 * @returns {Function}
 * @param {Number} d (0 <= d <= 9)
 * @returns {Array}
 */

function numberDig (n) {
  return (d) => {
    return numbers(n).map(square).join('').match(new RegExp(d, 'g')).length
  }
}

const dig = numberDig(10)
console.log(dig(1))

const dig2 = numberDig(11)
console.log(dig2(1))

const dig3 = numberDig(12)
console.log(dig3(1))

const dig4 = numberDig(13)
console.log(dig4(2))

