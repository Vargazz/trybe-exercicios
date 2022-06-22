const newPerson = (nomeCompleto) => {
    const email = nomeCompleto.split(' ').join('_')
    return {nomeCompleto, email: `${email}@trybe.com`}
}

const newEmployees = (retorno) => {
    const employees = {
      id1: retorno('Pedro Guerra'), 
      id2: retorno('Luiza Drumond'), 
      id3: retorno('Carla Paiva'), 
    }
    return employees;
  };

  console.log(newEmployees(newPerson))