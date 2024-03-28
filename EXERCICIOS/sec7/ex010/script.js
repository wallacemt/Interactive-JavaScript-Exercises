function mostraPar(num){

    for(let i = num; i >= 0; i--){
        if(i % 2 == 0){
            console.log(`O Numero é ${i}`)
        }
    }
}
mostraPar(400)