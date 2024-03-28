let y = 10;//escopo global

function imprimir(){
    let y = 150;//escopo da fuction
    console.log(y)
}

imprimir();
console.log(y)
