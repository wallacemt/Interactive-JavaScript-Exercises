function aparecer(){
    var resultado = document.getElementById("res")
    resultado.innerHTML = "ELEEE GOSTA😏🐴"
    var imagem = document.createElement("img")
    imagem.src = "meme.gif"
    document.getElementById("imagemContainer").appendChild(imagem)
    var corpoPag = document.getElementById("corpo")
    corpoPag.style.backgroundColor = "#DC143C"
    var som = document.getElementById("som")
    som.play()
}
