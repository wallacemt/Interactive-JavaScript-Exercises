window.addEventListener("keydown", function(e){
    if(e.key == 'q'){
        console.log("Apertou o 'Q'")
    } else if (e.key == 'Enter'){
        console.log("Apertou o 'Enter'")
    }
})

window.addEventListener("keyup", function(e){
    if(e.key == 'Enter') {
        console.log("Soltou o Enter")
    }
})