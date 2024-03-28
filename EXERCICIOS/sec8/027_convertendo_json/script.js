let pessoa = {
    "nome": "Manoel",
    "idade": 28,
    "profissao": "Garoto que faz Programa",
    "hobbies": ["Fazer trabalhos com o C#", "Academia", "Bike"]
}

let pessoaTexto = JSON.stringify(pessoa);
console.log(pessoaTexto);
//console.log(pessoaTexto.nome);

let pessoaJSON = JSON.parse(pessoaTexto);

console.log(pessoaJSON)

console.log(pessoaJSON.profissao)
console.log(pessoaJSON.hobbies[0])