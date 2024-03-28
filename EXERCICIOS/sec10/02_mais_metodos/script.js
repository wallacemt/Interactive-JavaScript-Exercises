const cachorro = {
    //<Metodos>
    raca: "SRD",
    uivar: function(){
        console.log("AAAAAAAAUUUUUUUUU!!!!!!!!!")
    },
    rosnar: function(){
        console.log("GRRRRRRR!!!")
    },
    setRaça: function(raca){
        this.raca = raca;
    },
    getRaca: function(){
        return "A Raça é " + this.raca
    }
}
console.log(cachorro.raca);

cachorro.setRaça("Pinscher");

console.log(cachorro.raca);

console.log(cachorro.getRaca())