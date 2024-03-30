const validarMarca = /Marca: (Nike|Adidas|Puma|Asics)/

console.log(validarMarca.test("Marca: Nike"));
console.log(validarMarca.test("Marca: Adidas"));
console.log(validarMarca.test("Marca: Ferrari"));
console.log(validarMarca.test("Puma"));
console.log(validarMarca.test("Marca: "));