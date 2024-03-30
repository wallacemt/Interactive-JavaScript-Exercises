let validarEmail = /\w+@\w+\.\w+/;

console.log(validarEmail.test("wallacesantanak0@gmail.com"));
console.log(validarEmail.test("pedroafonsomine@gmail"));
console.log(validarEmail.test("@outlook.com"));
console.log(validarEmail.test("manoelgomiBomDeMaize@gmail.com.br"))
console.log(validarEmail.test("gmail@gmail.gmail.gmail"))
