const cep = /\d{5}-\d{3}/

console.log("Cep")
console.log(cep.test("41100-024"))
console.log(cep.test("4100-024"))
console.log(cep.test("Cep?"))
console.log(cep.test("99999-999"))

const tel = /\(\d{2}\)\d{4,5}-\d{4}/;

console.log("tel")

console.log(tel.test("(71)98864-0175"));
console.log(tel.test("(48)99258-1081"));
