let nome = "manoel"

for(let i = 0; i < 10; i += 1){

    if (i == 3){
        nome = "Jõao";
    }
    if(i == 5 &&  nome == 'Jõao'){
        console.log("o nome é Joao, pode sair")
        break;
    }
    console.log(i);
}