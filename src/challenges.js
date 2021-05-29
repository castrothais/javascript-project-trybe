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
console.log(splitSentence('Agora vai.Fé'));

// Desafio 4
function concatName(arraystring) {
  let concatenacao = `${arraystring[arraystring.length - 1]}, ${arraystring[0]}`;
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
// 1° Para descobrir o maior número
function maiorNumero(numbers) {
  let numeroMaior = numbers[0];
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > numeroMaior) {
      numeroMaior = numbers[index];
    }
  }
  return numeroMaior;
}
// 2° Quantas vezes o maior número aparece
function highestCount(numbers) {
  let numeroMaior = maiorNumero(numbers);
  let resultado = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numeroMaior === numbers[index]) {
      resultado += 1;
    }
  }
  return resultado;
}
console.log(highestCount([1, 3, 5, 7, 9, 9]));

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(array) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      array[index] = 'fizzBuzz';

    } else if (array[index] % 3 === 0) {
      array[index] = 'fizz';

    } else if (array[index] % 5 === 0) {
      array[index] = 'buzz';

    } else {
      array[index] = 'bug!';
    }
  }
  return array;
}
console.log(fizzBuzz([3, 5, 21, 30, 13]));

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
