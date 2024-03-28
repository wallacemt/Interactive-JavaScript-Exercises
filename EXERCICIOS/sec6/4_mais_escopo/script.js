let x = 10;//escopo global

if(x > 5){
    let x = 20;//escopo do if
    x++
    console.log(x);
}
console.log(x);