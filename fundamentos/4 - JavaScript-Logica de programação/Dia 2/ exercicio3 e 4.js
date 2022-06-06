let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0

for(let index = 0; index < numbers.length; index +=1){
    
    soma += numbers[index];
    
}

let media = soma / numbers.length

console.log(media);

//Exercicio 4 = Se o valor for maior ou menor que 20

if( media > 20){

    console.log("Valor Maior que 20");
}else{

    console.log("Valor menor ou Igual a 20");
}
