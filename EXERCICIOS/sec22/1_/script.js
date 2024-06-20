//>>>>>>>>1-var, let, const<<<<<<
// var x = 10
// var y = 15
// if(y>10){
//     var x = 5
//     console.log(x)
// }
// console.log(x)
// function logName(){
//     const nome = "manoel"
//     console.log(nome);
// }
// const nome = "Xinbinha"
// logName();
// console.log(nome);



// >>>>>>>>>>>>2 arrow function<<<<<<<<<<<<<<<<<<
// const sun = function sum(a , b){
//     return a + b
// }
// const arrowSun = (a, b) =>  a + b
// console.log(sun(5 ,5));
// console.log(arrowSun(5 ,5));
// const greating = (nome) => {
//     if(nome){
//         return "ola " + nome + '!'
//     }else{
//         return "Ola!"
//     }
// }
// console.log(greating("Manoel"));
// console.log(greating())
// const user = {
//     name: "Theo",
//     seyUserName(){
//         var self = this
//         setTimeout(function() {
//             console.log(this)
//             console.log("Username: " + self.name)
//         }, 500)
//     },
//     seyUserNameArrow () {
//         setTimeout( () => {
//             console.log(this)
//             console.log("Username: " + this.name)
//         },700);
//     }
// }
// user.seyUserName()
// user.seyUserNameArrow();



// >>>>>3 Filter<<<<<<<<
// const arr = [1,2,3,4,5]
// const highNumbers = arr.filter((n) => {
//     if(n >=3){
//         return n
//     }
// })
// console.log(highNumbers)
// const users = [
//     {name: "Babu", avaible:true},
//     {name: "Joao", avaible:true},
//     {name: "Pedro", avaible:false},
//     {name: "Marcos", avaible:false},
// ]
// const avaibleUsers = users.filter((user) => user.avaible);
// const notavaibleUsers = users.filter((user) => !user.avaible)   ;
// console.log(avaibleUsers)
// console.log(notavaibleUsers)


//>>>>>>>>>>>4 map<<<<<<<<<<<<
// const products = [
//     {name: 'camisa', price: 10.99, category:"roupas"},
//     {name: 'Chaleira Elétrica', price: 70.99, category:"Eletro"},
//     {name: 'Fogao', price: 400, category:"Eletro"},
//     {name: 'Calça jeans', price: 50.99, category:"roupas"},
// ]
// products.map((products) =>{
//     if(products.category == 'roupas'){
//         products.onSale = true
//     }
// })

// console.log(products);


//>>>>>>>5 templates literais
// const userName = "Matheus";
// const age = 30

// console.log(`O nome do user e: ${userName} e tem ${age} anos`) 


//>>>>>>>6 Destructuring<<<<<<<<<<
// const frutas = ["Maça", "laranja", "mamao"]

// const [f1,f2,f3] = frutas

// console.log(f1);
// console.log(f2);
// console.log(f3);

// const productDetails = {
//     nome: "Mouse",
//     price: 30.99,
//     category: "perifericos",
//     color:"cinza"
// } 

// const {nome: productName, price, category:productCaregory, color} = productDetails

// console.log(`O nome do produto é ${productName}, custa R$${price}, pertence a caregoria ${productCaregory} é e da cor ${color}`)

//>>>>>>>>>>>>7 spread operator<<<<<<<<<
// const a1 = [1, 2, 3];
// const a2 = [4, 5, 6];

// const a3 = [...a1, ...a2];

// console.log(a3)

// const a4 = [0, ...a1, 4];

// console.log(a4);

// const carName = {name:"Celta"}
// const carBrand = {brand: "fusca"}
// const otherInfos = {km: 10000, price: 55000}

// const car = {...carName, ...carBrand, ...otherInfos};

// console.log(car)


// >>>>>>>8 Clases<<<<<<<<<
class Product{
    constructor(name, price){
        this.name = name
        this.price = price
    }

    productWithDiscound(discount){
        return this.price * ((100-discount) / 100)
    }
}

// const shirt = new Product("Camisa Gola V", 20)

// console.log(shirt.name)
// console.log(shirt.productWithDiscound(10));

// console.log(shirt.productWithDiscound(50))

// const tenis = new Product("Tenis verde", 120);

// console.log(tenis.productWithDiscound(20))


//>>>>>>>>9 Herança<<<<<<<<<

class ProductWithAttributes extends Product{
    constructor(name, price, colors){
        super(name,price);
        this.colors = colors
    }
    showColors(){
        console.log("As cores são: ")
        this.colors.forEach((color) => {
            console.log(color);
        });
    }
}

const hat = new ProductWithAttributes("Chapeu", 29.99, ["Preto", "Azul", "Verde"])

console.log(hat)

console.log(hat.name)

console.log(hat.productWithDiscound(30))

hat.showColors()