function maisRepetido(array) {
    let numero = {};
  
    for (let index = 0; index < array.length; index += 1) {

      let valor = array[index];

      if (numero[valor] === undefined) {
        numero[valor] = 1;
      } else {
        numero[valor] = numero[valor] + 1;
      }
    }
  
    let repetido = 0;
    let vezes = 0;
  
    for (let key in numero) {
      if (repetido < numero[key]) {
        repetido = numero[key];
        vezes = key;
      }
    }
  
    return vezes;
  }
  
  console.log(maisRepetido([2, 3, 5, 3, 8, 2, 3]));