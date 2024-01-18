function contar(){
    var inicio = document.getElementById("numInicio")
    var fim = document.getElementById("numFim")
    var passo = document.getElementById("numPasso")
    var resultado = document.getElementById("res")
    res.style.textAlign = 'center'

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = "Impossível contar!"
    } else {
        resultado.innerHTML = "Contando: <br>"
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p <= 0){
            window.alert("Passo invalido! Considerando PASSO 1")
            p = 1
        }
        if(i < f) {
            for(let c = i; c <= f; c += p){
                resultado.innerHTML += `${c} 👉 `
            }
        }else{
            for(let c = i; c >= f; c -= p){
                resultado.innerHTML += c + "👉"
            }
        }
        resultado.innerHTML += "🏁"
    }
        
}
