const checkNumber = (myNumber, number ) => {myNumber === number};

const randomNumber = (myNumber , check) => {
    const random = Math.floor(Math.random() * 5 + 1);

    return check(myNumber, random) ? 'Parabén você Ganhou' : 'Tente novamente'

}

console.log(randomNumber(2, checkNumber));