let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")

btn1.addEventListener('mousedown', function(){
    console.log("Apertou o Botão")
})

btn1.addEventListener('mouseup', function(){
    console.log("Soutou o botão")
})

btn2.addEventListener('dblclick', function(){
    console.log("Double Click")
})

btn2.addEventListener('contextmenu', function(e){
    e.preventDefault();
    console.log("Clicou com o Direito")
})