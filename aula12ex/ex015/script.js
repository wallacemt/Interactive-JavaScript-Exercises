function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")
    if(fano.value.length == 0 || fano.value > ano){
        window.alert("[ERRO!] verifique os dados e tente novamente!")
    }else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", 'foto')
        if(fsex[0].checked){
            genero = "Homem"
            if(idade >= 0 && idade <= 10){
                //Criança
                img.setAttribute("src", "fotobebemenino.png" )
            }else if(idade < 21){
                //Jovem
                img.setAttribute("src", "fotojovemhomem.png")
            }else if(idade < 50){
                //Adulto
                img.setAttribute("src", "fotohomemadulto.png")
            }else{
                //Idoso
                img.setAttribute("src", "fotoidosohomem.png")
            }
        }else if (fsex[1].checked){
            genero = "Mulher"
            if(idade >= 0 && idade <= 10){
                //Criança
                img.setAttribute("src", "fotobebemenina.png" )
            }else if(idade < 21){
                //Jovem
                img.setAttribute("src", "fotojovemmulher.png" )
            }else if(idade < 50){
                //Adulto
                img.setAttribute("src", "fotomulheradulta.png" )
            }else{
                //Idoso
                img.setAttribute("src", "fotoidosomulher.png" )
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        
    }
}