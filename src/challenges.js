// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return base * (height / 2);
}
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
console.log(splitSentence('Agora vai. Fé'));

// Desafio 4- Corrigir Erro->Linha 23: Unexpected string concatenation.
function concatName(arraystring) {
  let concatenacao = arraystring[arraystring.length - 1] + ', ' + arraystring[0];
  return concatenacao;
}
console.log(concatName('Thaís Sampaio'));

// Desafio 5
function footballPoints(wins, ties) {
  let valorVitoria = wins * 3;
  let valorEmpate = ties * 1;
  return valorVitoria + valorEmpate;
}
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
