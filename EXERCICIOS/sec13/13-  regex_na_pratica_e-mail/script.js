const validaDominio = /[?www.]\w+\.com.br|.com/;

console.log(validaDominio.test("www.google.com"));
console.log(validaDominio.test("www.amazon.com.br"));
console.log(validaDominio.test("www.horadecodar.com.br"));
console.log(validaDominio.test("www.youtube"));
console.log(validaDominio.test("horadecodar.com.br"))