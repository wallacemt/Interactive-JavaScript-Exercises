let input = document.querySelector("input");

input.addEventListener('focus', function(){
    console.log("Entro no Input")
    document.body.style.backgroundColor = 'black'
})

input.addEventListener('blur', function(){
    console.log("Saiu no Input")
    document.body.style.backgroundColor = 'white'
})