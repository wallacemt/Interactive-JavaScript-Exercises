let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let a = document.querySelector("a")

function msg(e){
    console.log('Clicou no button')
    e.stopPropagation();
}

btn1.addEventListener("click", msg);

a.addEventListener('click', function(e){

    e.preventDefault();
    
    console.log("Nao vai pro link")

})
