const reg1 = /[12345]/

console.log(reg1.test("Temos um numero 6"));
console.log(reg1.test("Temos um numero 2"));
console.log(reg1.test("Temos um numero 23"));
console.log(reg1.test("Temos um numero 60"));


const reg2 = /[0-9]/

console.log(reg2.test("Temos um numero 65646546"))
console.log(reg2.test("Temos um numero"))


