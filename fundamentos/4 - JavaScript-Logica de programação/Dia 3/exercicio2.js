//Inverção de Palavra 

let palavra = 'banana';
let invercao = '';

for ( var index = palavra.length -1; index >= 0; index -= 1){
    invercao += palavra[index]
}

console.log(invercao);