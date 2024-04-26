let {writeFile} = require('fs')

writeFile("arquivo.txt", 'Texto write file', (error) =>{
    if(error){
        throw(error);
    }else{
        console.log("Escreveu Com Sucesso");
    }
})
