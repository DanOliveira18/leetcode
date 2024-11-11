// Compara o elemento atual com o proximo, caso seja maior troca de posição, repete isso até o arr não realizar mais nenhuma mudança
// Melhor caso: O(n) quando a lista ja está ordenada, ainda necessita percorrer a lista 1 vez
// Caso medio e pior caso: O(n)² onde será necessario percorrer todo o array

export const bubbleSort = (arr: Array<number>) => {
  console.log("start array: ", arr.toString());

  // Inicia com "tamanho do array - 1" e vai decrescendo pq na primeira iteração o maior elemento ja vai para a ultima posição
  // Portanto não necessita ser ordenado
  for (let i = arr.length - 1; i > 0; i--) {
    //Percorre o array jogando o maior elemento para a ultima posição
    let swap = false;
    for (let j = 0; j < arr.length; j++) {
      //Se o elemento atual for maior que o proximo: swap
      if (arr[j] > arr[j + 1]) {
        console.log(`[i: ${i}, j: ${j}] Swap: ${arr[j]} > ${arr[j + 1]}`);
        const aux = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = aux;
        swap = true;
      }
    }
    if (!swap) break; // Otimização, se não houver nenhuma mudança, para de percorrer o array pois ja está ordenado
    console.log(`[i: ${i}] array: ${arr.toString()}`);
  }

  console.log("final array: ", arr.toString());
};
