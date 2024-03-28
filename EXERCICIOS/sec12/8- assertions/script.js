let arr  = [1,2,3,4,5];
let arr2 = [];

function interarArray(arr){
    if(arr.length == 0){
        throw new Error("Array precisar ter ELEMENTOS!🤡🤚")
    }else{
        for(let i = 0; i < arr.length; i++){
            console.log(i)
        }
    }
}

function arrauVazio(arr){
    if(arr.length > 0){
        throw new Error("O Array não pode ter elementos")
    }else{
        console.log("Agora deu certo")
    }
}

interarArray(arr)
interarArray(arr2)

arrauVazio(arr)
arrauVazio(arr2)
