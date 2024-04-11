let elemento = document.querySelector("#titulo-principal")

console.log("Largura " + elemento.offsetWidth) // considera bordas
console.log("Altura "+ elemento.offsetHeight)


console.log("Largura " + elemento.clientWidth) // não considera bordas
console.log("Altura "+ elemento.clientHeight)