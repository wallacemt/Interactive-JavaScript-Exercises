function gerar(){
    let numero = document.getElementById("numtabuada")
    let tab = document.getElementById("seltab")
    res.style.textAlign = 'center'
    if(numero.value.length == 0){
        alert("Por favor, digite um número")
    }else{
        let n = Number(numero.value)
        let c = 1
        tab.innerHTML = ""
        while(c <= 10){
            let item = document.createElement('option')
            item.text = ` ${n} x ${c} = ${n * c}`
            tab.appendChild(item)
            c++
        }
    }
}
    