let p = Promise.resolve(new Error("Não Deu Certo."));

console.log("AINDA!")
.catch(reason => console.log("Falhou " + reason))

p.then(value => console.log(value))