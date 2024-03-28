let carro = {
    portas: 2,
    portaMalas:"200l",
    motor: '2.0'
}

let adicioanais = {
    totoSolar:true,
    arCondicionado:true
}

console.log(carro);

Object.assign(carro, adicioanais);
//assign[objeto que herda], [objeto que passa a herança]

console.log(carro)
console.log(Object.keys(carro))
