let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxs = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let msgContainer = document.querySelector("#mensage");
let msgText = document.querySelector("#mensage p");
let secondPlayer;

// contador de jogadas
let player1 = 0;
let player2 = 0;


//ver quem vai jogar
function checkEl(player1, player2){
    let el;
    if(player1 == player2){
        //x
        el = x;
    } else {
        //o
        el = o;
    }

    return el
}

// adicionando evento de click aos boxs

for(let i = 0; i < boxs.length; i++){
    // quando alguem clica na caixa
    boxs[i].addEventListener('click', function() {
        
        let el = checkEl(player1, player2);

        //verifica se ja tem x ou o
        if(this.childNodes.length == 0){

            let cloneEl = el.cloneNode(true)

            this.appendChild(cloneEl);

            //computa jogadas
            if(player1 == player2){
                player1++;
                
                if(secondPlayer == 'ai-player'){
                    //funcao executa jogadas
                    computerPlay()
                    player2++;
                    
                }
            }else{
                player2++
            }
            checkWinCondition()
        }


    })
}

//evento pra saber se e 2 ou IA

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        secondPlayer = this.getAttribute("id");

        for(let j = 0; j < buttons.length; j++){
            buttons[j].style.display = 'none'
        }
        setTimeout(function(){
            let container = document.querySelector("#container")
            container.classList.remove('hide')
        }, 500)

    })
}



//ver quem ganhou
function checkWinCondition(){

    let blocos = document.querySelectorAll(".box");

    //condicao pra ganhar na 1° Horizontal
    if(blocos[0].childNodes.length > 0 && blocos[1].childNodes.length > 0 && blocos[2].childNodes.length > 0 ){
        let b1Child = blocos[0].childNodes[0].className;
        let b2Child = blocos[1].childNodes[0].className;
        let b3Child = blocos[2].childNodes[0].className;
        if(b1Child == 'x' && b2Child == 'x' && b3Child == 'x'){
            // x Ganhou
            declaraVencedor('x')
        } else if(b1Child == 'o' && b2Child == 'o' && b3Child == 'o'){
            // o Ganhou
            declaraVencedor('o')
        }
    }
    //condicao pra ganhar na 2° Horizontal
    if(blocos[3].childNodes.length > 0 && blocos[4].childNodes.length > 0 && blocos[5].childNodes.length > 0 ){
        let b4Child = blocos[3].childNodes[0].className;
        let b5Child = blocos[4].childNodes[0].className;
        let b6Child = blocos[5].childNodes[0].className;
        if(b4Child == 'x' && b5Child == 'x' && b6Child == 'x'){
            // x Ganhou
            declaraVencedor('x')
        } else if(b4Child == 'o' && b5Child == 'o' && b6Child == 'o'){
            // o Ganhou
            declaraVencedor('o')
        }
    }
    //condicao pra ganhar na 3° Horizontal
    if(blocos[6].childNodes.length > 0 && blocos[7].childNodes.length > 0 && blocos[8].childNodes.length > 0 ){
        let b7Child = blocos[6].childNodes[0].className;
        let b8Child = blocos[7].childNodes[0].className;
        let b9Child = blocos[8].childNodes[0].className;
        if(b7Child == 'x' && b8Child == 'x' && b9Child == 'x'){
            // x Ganhou
            declaraVencedor('x')
        } else if(b7Child == 'o' && b8Child == 'o' && b9Child == 'o'){
            // o Ganhou
            declaraVencedor('o')
        }
    }


    //condicao pra ganhar na 1° Vertical
    if(blocos[0].childNodes.length > 0 && blocos[3].childNodes.length > 0 && blocos[6].childNodes.length > 0 ){
        let b1Child = blocos[0].childNodes[0].className;
        let b4Child = blocos[3].childNodes[0].className;
        let b7Child = blocos[6].childNodes[0].className;
        if(b1Child == 'x' && b4Child == 'x' && b7Child == 'x'){
            // x Ganhou
            declaraVencedor('x')
        } else if(b1Child == 'o' && b4Child == 'o' && b7Child == 'o'){
            // o Ganhou
            declaraVencedor('o')
        }
    }
    //condicao pra ganhar na 2° Vertical
    if(blocos[1].childNodes.length > 0 && blocos[4].childNodes.length > 0 && blocos[7].childNodes.length > 0 ){
        let b2Child = blocos[1].childNodes[0].className;
        let b5Child = blocos[4].childNodes[0].className;
        let b8Child = blocos[7].childNodes[0].className;
        if(b2Child == 'x' && b5Child == 'x' && b8Child == 'x'){
            // x Ganhou
            declaraVencedor('x')
        } else if(b2Child == 'o' && b5Child == 'o' && b8Child == 'o'){
            // o Ganhou
            declaraVencedor('o')
        }
    }
    //condicao pra ganhar na 3° Vertical
    if(blocos[2].childNodes.length > 0 && blocos[5].childNodes.length > 0 && blocos[8].childNodes.length > 0 ){
        let b3Child = blocos[2].childNodes[0].className;
        let b6Child = blocos[5].childNodes[0].className;
        let b9Child = blocos[8].childNodes[0].className;
        if(b3Child == 'x' && b6Child == 'x' && b9Child == 'x'){
            // x Ganhou
            declaraVencedor('x')
        } else if(b3Child == 'o' && b6Child == 'o' && b9Child == 'o'){
            // o Ganhou
            declaraVencedor('o')
        }
    }
    // condicao para 1° Diagonal
    if(blocos[0].childNodes.length > 0 && blocos[4].childNodes.length > 0 && blocos[8].childNodes.length > 0 ){
        let b1Child = blocos[0].childNodes[0].className;
        let b5Child = blocos[4].childNodes[0].className;
        let b9Child = blocos[8].childNodes[0].className;
        if(b1Child == 'x' && b5Child == 'x' && b9Child == 'x'){
            // x Ganhou
            declaraVencedor('x')

        } else if(b1Child == 'o' && b5Child == 'o' && b9Child == 'o'){
            // o Ganhou
            declaraVencedor('o')

        }
    }
    // condicao para 2° Diagonal
    if(blocos[2].childNodes.length > 0 && blocos[4].childNodes.length > 0 && blocos[6].childNodes.length > 0 ){
        let b3Child = blocos[2].childNodes[0].className;
        let b5Child = blocos[4].childNodes[0].className;
        let b7Child = blocos[6].childNodes[0].className;
        if(b3Child == 'x' && b5Child == 'x' && b7Child == 'x'){
            // x Ganhou
            declaraVencedor('x')

        } else if(b3Child == 'o' && b5Child == 'o' && b7Child == 'o'){
            // o Ganhou
            declaraVencedor('o')
            
        }
    }
    
    //DEU VELHA
    let cont = 0;
    
    for(let i = 0; i < blocos.length; i++){
        if(blocos[i].childNodes[0] != undefined){
            cont++
        }
    }

    if(cont == 9){
        //Quando dar velha e ninguem ganhar!
        declaraVencedor(" ")
        console.log("v")
    }
}

//limpa o jogo, declara o vencedor e atualiza o placar
function declaraVencedor(winner){
    let scoreBoardX = document.querySelector("#scoreboard-1");
    let scoreBoardY = document.querySelector("#scoreboard-2");
    let msg = ''

    if(winner == "x"){
        scoreBoardX.textContent = parseInt(scoreBoardX.textContent) + 1
        msg = "O Jogador 1 Venceu!"
    }else if(winner == 'o'){
        scoreBoardY.textContent = parseInt(scoreBoardY.textContent) + 1
        msg = 'O Jogador 2 Venceu!'
    }else{
        msg = 'Deu Velha!'
    }

    //exibe msg na tela
    msgText.innerHTML = msg;
    msgContainer.classList.remove("hide");

    //esconde msg
    setTimeout(function(){
        msgContainer.classList.add('hide')
        
        // removendo x e o
        let boxesRemove = document.querySelectorAll(".box div");
    
        for(let i = 0; i < boxesRemove.length; i++){
            boxesRemove[i].parentNode.removeChild(boxesRemove[i])
        }
    }, 2000);

    //zera jogadas
    player1 = 0;
    player2 = 0;

}

// jogada IA 
function computerPlay() {

    let cloneO = o.cloneNode(true);
    counter = 0;
    filled = 0;
            
    for(let i = 0; i < boxs.length; i++) {
  
      let randomNumber = Math.floor(Math.random() * 5);
  
      // só se não tiver marcado anteriormente
      if(boxs[i].childNodes[0] == undefined) {  
        if(randomNumber <= 1) {
          boxs[i].appendChild(cloneO);
          counter++;
          break;
        }
      // checar quantas estão preenchidas        
      } else {
        filled++;
      }
  
    }
  
    if(counter == 0 && filled < 9) {
      computerPlay();
    }
  
  }
