// Desafio 10
function techList(tech, name) {
  let listaTecnologia = [];
  let tecnologiaOrdenadas = tech.sort();

  if (tech.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < tech.length; index += 1) {
    listaTecnologia.push({ tech: tecnologiaOrdenadas[index], name });
  }
  return listaTecnologia;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
