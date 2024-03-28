function verificaArray(array){
    if(array.length >= 5){
        console.log(`O array possui ${array.length} itens, então tem Muitos Elementos🤪`)
    }else{
        console.log(`O array possui ${array.length} itens, então tem Poucos Elementos📦`)
    }
}

let valores1 = ["Wallace", 2003, "Violino", "One Piece"]
let valores2 = ["Fortinite", "The Las of Us", "God Of War", 2012, 2003, 2004]

verificaArray(valores1);
verificaArray(valores2);