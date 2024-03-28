const padrao = /Abacax?i/;

console.log("Padrão")
console.log(padrao.test("Abacaxi"));
console.log(padrao.test("Abacai"))

const padrao2 = /\d+\w?/;

console.log("Padrão-2")
console.log(padrao2.test("123"))
console.log(padrao2.test("123ab"))
console.log(padrao2.test("123 "))
