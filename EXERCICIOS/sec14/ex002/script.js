const soComId = /\d+ID\b/;

console.log(soComId.test("1234ID"));
console.log(soComId.test("opadesID"))
console.log(soComId.test("opa123ID"))
console.log(soComId.test("ID"))
console.log(soComId.test("1244123   "))