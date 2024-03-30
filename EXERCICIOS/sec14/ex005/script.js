const validarNomeDeUsuario = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(validarNomeDeUsuario.test("wallace_k10"));

console.log(validarNomeDeUsuario.test("op"))
console.log(validarNomeDeUsuario.test("1221214231443554343"))