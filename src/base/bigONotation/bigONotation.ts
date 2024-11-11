// big O é uma notação para saber o quão eficiente é o seu algoritmo em questão de espaço e tempo
// Sempre considerar o maior big O da função para definir em qual ela se encaixa

// Ranking de complexidade do O(n)
// O(1), O(log n) > O(n) > O(n log n) > O(n^2) > O(2^n) > O(n!)

// O(1);
// Independente do tamanho da lista, sempre vai printar o primeiro, portanto a performance é constante
const printFirst = (items: Array<any>) => {
  console.log(items[0]); // O(1);
};

// O(n)
// A performance varia de acordo com o tamanho da lista, portanto é um crescimento linear
const printAll = (items: Array<any>) => {
  //O(n)
  items.forEach((item) => {
    console.log(item); //O(1)
  });
};

// O(n)
// Apesar de ter 2 iterações separadas, ambas são O(n) pois percorrem o array 1 vez cada
// Como a notação big O pega o maior big O da função, e o maior é O(n), então essa função
// é O(n)
const printAllAndInverted = (items: Array<any>) => {
  //O(n)
  items.forEach((item) => {
    console.log(item); //O(1)
  });

  console.log("--------");

  //O(n)
  items.reverse().forEach((item) => {
    console.log(item); //O(1)
  });
};

// O(n) n = numero de células
// Apesar de possui um for dentro de outro for, pode-se considerar essa função O(n)
// por conta de que o 2 for vai depender do numero de colunas e não necessariamente vai ser
// exatamente o mesmo valor de linhas. Portanto podemos dizer que essa função é O(n) onde n é
// o numero de células dessa matrix
const findElement = (matrix: Array<Array<number>>, target: number) => {
  const rows = matrix.length; // O(1)
  const cols = matrix[0].length; // O(1)

  // O(n) n = numero de células na matrix
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] == target) {
        console.log(`target found at row: ${i + 1} and col: ${j + 1}`);
        return;
      }
    }
  }

  console.log("target not found");
};

// O(n^2)
// O Tempo de execução está diretamente ligado com a entrada, onde
// a execução será n * n, sendo n o tamanho do array.
// Portanto se o array tiver 10 posições, será executado 100 iterações.
const combineNames = (arr: Array<string>) => {
  // O(n^2)
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        console.log(`Combinação: ${arr[i]} + ${arr[j]}`);
      }
    }
  }
};

// --- TEST CASES
const items = [5, 6, 7, 8, 9, 3, 4, 6, 7];

// console.log("Print first");
// printFirst(items);
// console.log("Print All");
// printAll(items);
// console.log("Print All and Inverted");
// printAllAndInverted(items);

// const matrix = [
//   [0, 1],
//   [2, 3],
//   [4, 5],
//   [6, 7],
//   [8, 9],
//   [10, 11],
// ];

// console.log("Find Element");
// findElement(matrix, 11);

const names = ["João", "Felipe", "Ana", "Gabriela"];
console.log("Combine names");
combineNames(names);
