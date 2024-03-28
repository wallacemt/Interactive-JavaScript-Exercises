const reg1 = new RegExp('bola');

console.log(reg1.test("tem bola? lá ele"))
console.log(reg1.test("Não tem kk"))

const reg2 = /bola/;

let text = "a bola sumiu";

console.log(reg2.test("cade a bola?"));
console.log(reg2.test("Eu sí lembru."));

console.log(reg2.test(text))

console.log(/quadrado/.test("Onde tem quadrado"));
console.log(/quadrado/.test("zzz1234quadradoeqasd23"))