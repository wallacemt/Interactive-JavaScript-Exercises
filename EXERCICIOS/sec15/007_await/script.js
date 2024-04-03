function somarComDeley(a,b){
    return new Promise(resolve =>{
        setTimeout(function() {
            resolve(a+b);
        }, 4000);
    })
}

async function resSoma(a,b,c){
    let w = somarComDeley(a,b)
    let y = c;
    return await w + y;
}
resSoma(1,2,3).then(value => console.log(value));