let cachorro = {
    patas: 4,
    raca: "SRD",
    latir: function(){
        console.log("Se Quiser Sim Mano!")
    }
}

let rusky = Object.create(cachorro);

rusky.latir();

rusky.raca = "Rusy Siberiano";

console.log(rusky.raca);
console.log(cachorro.raca);
  
let pastor = Object.create(cachorro);

pastor.raca = "Pastor Alemao"

console.log(pastor.raca)