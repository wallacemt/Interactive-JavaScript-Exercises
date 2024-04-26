let {readFile} = require('fs')

readFile("arquivo.txt", 'utf-8', (error, texto) =>{
    if(error){
        throw(error);
    }else{
        console.log(texto);
    }
})
