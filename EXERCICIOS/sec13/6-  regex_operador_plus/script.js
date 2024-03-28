const muitosOuPoucosDigitos = /\d+/

console.log(muitosOuPoucosDigitos.test("1234"))
console.log(muitosOuPoucosDigitos.test(""))
console.log(muitosOuPoucosDigitos.test("Opa"))
console.log(muitosOuPoucosDigitos.test("114343254353"))
console.log(muitosOuPoucosDigitos.test("1"))
