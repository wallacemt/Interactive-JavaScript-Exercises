let p = Promise.resolve(5)

console.log("Outros Codigos!")

console.log(p)

p.then((value) => (console.log(`O Valor é ${value}`)));

