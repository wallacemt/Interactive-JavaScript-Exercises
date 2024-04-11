let lista = document.createElement("ul")

let itensDaLista = ["Bola ", "Carro ", "Bicicleta ", "Celular "]

for(i = 0; i < itensDaLista.length; i++){
    let texto = document.createTextNode(itensDaLista[i])
    let item = document.createElement("li")
    
    item.appendChild(texto)
    lista.appendChild(item);

}

let container = document.querySelector("#container-principal")

container.appendChild(lista);
