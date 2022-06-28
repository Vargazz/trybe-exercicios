// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'morango', 'uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['melancia', 'mamao', 'maça'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));