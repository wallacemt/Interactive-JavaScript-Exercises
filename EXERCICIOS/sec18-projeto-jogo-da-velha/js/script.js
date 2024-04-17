let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxs = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let msgContainer = document.querySelector("#mensage");
let msgText = document.querySelector("#message p");
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
            if(player1 == player2){
                player1++   
            }else{
                player2++
            }
        }

    })
}
