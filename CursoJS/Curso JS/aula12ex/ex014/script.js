function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    if(hora >= 0 && hora < 12){
        //Bom Dia
        msg.innerHTML = `Agora são ${hora} horas! Tenha um Bom Dia 🌞`
        img.src = "foto_manha.png"
        document.body.style.background = "#fead81"
    }else if(hora >= 12 && hora <= 18){
        //Boa Tarde!
        msg.innerHTML = `Agora são ${hora} horas! Tenha uma Boa Tarde 🌇`
        img.src = "foto_tarde.png"
        document.body.style.background = "#aa6e6d"
    }else{
        //Boa Noite!
        msg.innerHTML = `Agora são ${hora} horas! Tenha uma Boa Noite 🌚`
        img.src = "foto_noite.png"
        document.body.style.background = "#131615"
    }

}