var ArrayFactory = require('./array-factory')
var dig = require('./array-dig')

var array1 = new ArrayFactory(10)
var array2 = new ArrayFactory(11)
var array3 = new ArrayFactory(12)
var array4 = new ArrayFactory(13)

console.log(array1.square())
console.log(array1.square().dig(1))

console.log(array2.square())
console.log(array2.square().dig(1))

console.log(array3.square())
console.log(array3.square().dig(1))

console.log(array4.square())
console.log(array4.square().dig(2))
