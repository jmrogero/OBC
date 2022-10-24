const { suma, multiplica } = require("./controller.js");

const sum1 = suma(1, 2)
const sum2 = suma(4, 5)
console.log(sum1)
console.log(sum2)

const multi = multiplica(sum1, sum2)
console.log(multi)