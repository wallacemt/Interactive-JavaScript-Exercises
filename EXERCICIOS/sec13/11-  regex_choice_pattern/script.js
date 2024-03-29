const reg = /\w+: (Manoel|Wallace|Luisa)/;

console.log(reg.test("Nome: Wallace"));
console.log(reg.test("Nome: Nina"));
console.log(reg.test("Nome: Luisa"));
