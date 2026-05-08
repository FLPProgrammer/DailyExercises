/**
 * Implementação Recursiva do QuickSort
 * Complexidade de Tempo: O(n log n) em média
 */
function quickSort(array: number[]): number[] {
    // Caso base: se o array tiver 0 ou 1 elemento, já está ordenado
    if(array.length <= 1) {
        return array;
    }

    // Seleção do pivô (neste caso, o último elemento)
    const pivot: number = array[array.length - 1]!;
    const smaller: number[] = [];
    const bigger: number[] = [];

    // Particionamento
    for(let i = 0; i < array.length - 1; i++) {
        const current = array[i]!;

        if(current < pivot) {
            smaller.push(current);
        } else {
            // Elementos maiores ou iguais ao pivô
            bigger.push(current);
        }
    }

    // Recursão e Composição (Spread operator)
    return [...quickSort(smaller), pivot, ...quickSort(bigger)];
}

// Teste
console.log(quickSort([4, 5, 6, 7, 8, 9, 2])); 
// Saída: [2, 4, 5, 6, 7, 8, 9]