// 1 - Crie uma função que receba um número e retorne seu fatorial.
const factorial = number => {
    let result = 1;

    for (let i = 2; i <= number; i += 1) {
        result *= i;
    }

    return result;
}

console.log(factorial(5));

// 2 - Crie uma função que receba uma frase e retorne qual a maior palavra.

const biggestWord = sentence => {
    let texto = sentence.split(' ');
    let maxLength = 0;
    let frase = '';

    for(const key of texto){
        if(key.length > maxLength){
            maxLength = key.length
            frase = word;
        }
    }
    return frase
}

console.log(biggestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));