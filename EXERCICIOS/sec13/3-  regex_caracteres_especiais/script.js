const pontoRegex = /./;

console.log("regex ' . '")
console.log(pontoRegex.test("asd"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("1234"));
console.log(pontoRegex.test("1223 opa"));

const dRegex = /\d/; // [0-9]

console.log("regex 'd'")
console.log(dRegex.test("090123"))
console.log(dRegex.test(" "))
console.log(dRegex.test("opa 123"))
console.log(dRegex.test("opa amigao"))

const dRegex2 = /\D/; // [^0-9]

console.log("regex 'D'")
console.log(dRegex2.test("090123"))
console.log(dRegex2.test(" "))
console.log(dRegex2.test("opa 123"))
console.log(dRegex2.test("opa amigao"))


const sRegex = /\s/;

console.log("regex 's'")
console.log(sRegex.test("090123"))
console.log(sRegex.test(" "))
console.log(sRegex.test("opa 123"))
console.log(sRegex.test("opamigao"))

const wRegex = /\w/;

console.log("regex 's'")
console.log(wRegex.test("090123"))
console.log(wRegex.test(" "))
console.log(wRegex.test("opa 123"))
console.log(wRegex.test("opamigao"))