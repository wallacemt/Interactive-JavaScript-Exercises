class Carrinho{
    constructor(item, qtd, valorTotal){
        this.item = item;
        this.qtd = qtd;
        this.valorTotal = valorTotal;
    }
    addItem(item){

        let contador = 0

        for(let itemCarrinho in this.item){
            if(this.item[itemCarrinho].id == item.id){
                this.item[itemCarrinho].qtd += item.qtd;
            }   
        }

        if(contador == 0){
            this.item.push(item);
        }

        this.qtd += item.qtd;
        this.valorTotal += item.preco * item.qtd
    }

    removerItem(item){
        for(let itemCarrinho in this.item){
            if(this.item[itemCarrinho].id == item.id){
                let obje = this.item[itemCarrinho]
                let index = this.item.findIndex(function(obje) { return obje.id == item.id});

                this.qtd -= item.qtd
                this.valorTotal -=  this.item[itemCarrinho].preco * this.item[itemCarrinho].qtd

                this.item.splice(index, 1);


            }   
        }
    }
}

let carrinho = new Carrinho([
    {
        id: 1,
        nome:"Guitarra",
        qtd: 1,
        preco:1300,
    },
    {
        id: 2,
        nome: "Saxofone",
        qtd: 1,
        preco:2300,
    }
], 2, 3600);


console.log(carrinho)

carrinho.addItem({id:1, nome:"Guitarra", qtd:3, preco:1300})

console.log(carrinho)

carrinho.addItem({id:3, nome:"Piano", qtd:1, preco:23000})

console.log(carrinho)

carrinho.removerItem({id:3, nome: "Piano", qtd: 1, preco: 23000})

console.log(carrinho)