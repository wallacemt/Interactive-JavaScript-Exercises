function tipoDado(dado){
    let msg = `O dado (${dado}) que foi passado é do tipo `;
    if(typeof(dado) == 'number'){
        console.log(msg + 'Number')
    } else if(typeof(dado) == 'boolean'){
        console.log(msg + 'Boolean')
    }else if(typeof(dado) == 'string'){
        console.log(msg + 'String')
    }
}

tipoDado(344)
tipoDado(true)
tipoDado("JACA")