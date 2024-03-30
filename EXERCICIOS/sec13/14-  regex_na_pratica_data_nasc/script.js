const validarDataNasc = /[0-31]{2}[/][0-12]{2}[/][1920-2023]{4}/;

console.log(validarDataNasc.test("02/02/2001"));
console.log(validarDataNasc.test("4/2/2003"));
console.log(validarDataNasc.test("05-02-2002"));
console.log(validarDataNasc.test("12/10/2017"));
console.log(validarDataNasc.test("44/33/9833"))
console.log(validarDataNasc.test("31/00/2010"))
