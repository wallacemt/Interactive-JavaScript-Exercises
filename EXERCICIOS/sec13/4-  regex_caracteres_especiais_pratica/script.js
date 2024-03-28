const dia = /\d\d/;

console.log("dia")
console.log(dia.test("2023")  &&  "2019".length == 2);
console.log(dia.test("aaa"));
console.log(dia.test("05") && "05".length == 2);
console.log(dia.test("opa1"))


let palavrasComAteTresLetras = /\w\w\w/;
console.log("ate 3 letras")
console.log(palavrasComAteTresLetras.test("asd"))
console.log(palavrasComAteTresLetras.test("opaamigao"))
console.log(palavrasComAteTresLetras.test("as"))