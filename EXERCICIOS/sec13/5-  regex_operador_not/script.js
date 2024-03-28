const notAeB = /[^ab]/

console.log(notAeB.test("a"))
console.log(notAeB.test("Aqui tem a"))

const notAeZ = /[^a-z]/

console.log(notAeZ.test("Aqui tem agua"))

