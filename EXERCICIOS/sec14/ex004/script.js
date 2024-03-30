const validarIP = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(validarIP.test("127.0.0.1"));
console.log(validarIP.test("8.8.0.1"))
console.log(validarIP.test("192.168.1.0"))

console.log(validarIP.test("192.168.90"))
console.log(validarIP.test("192"))
console.log(validarIP.test("opa ip?"))
console.log(validarIP.test("19201349104"))
console.log(validarIP.test("19212312.1683321.1.90123"))
