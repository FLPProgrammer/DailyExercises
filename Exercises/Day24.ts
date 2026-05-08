function bubbleSort(array: number[]): number[] {
    const result = [...array];

    for (let i = 0; i < result.length - 1; i++) {
        for (let j = 0; j < result.length - 1 - i; j++) {
            if (result[j]! > result[j + 1]!) {
                [result[j], result[j + 1]] = [result[j + 1]!, result[j]!];
            }
        }
    }

    return result;
}

function selectionSort(array: number[]): number[] {
    const result = [...array];

    for (let i = 0; i < result.length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < result.length; j++) {
            if (result[j]! < result[minIndex]!) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            [result[i], result[minIndex]] = [result[minIndex]!, result[i]!];
        }
    }

    return result;
}

console.log(selectionSort([5, 3, 8, 4, 2]));


function mergeSort(array: number[]): number[] {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);

    const left = array.slice(0, middle);
    const right = array.slice(middle);

    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);
}

function merge(left: number[], right: number[]): number[] {
    const result: number[] = [];

    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i]! < right[j]!) {
            result.push(left[i]!);
            i++;
        } else {
            result.push(right[j]!);
            j++;
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}




/*
Ideia principal:
O Bubble Sort compara elementos vizinhos e vai empurrando o maior valor
para o final do array a cada passada.

Resumo mental:
Bubble Sort olha para dois vizinhos e pergunta:
"Eles estao na ordem certa?"
Se nao estiverem, ele troca.
*/

/*
Ideia principal:
O Selection Sort procura o menor valor na parte ainda nao ordenada do array
e coloca esse valor na posicao correta.

Exemplo:

[5, 3, 8, 4, 2]

Na primeira passada, olhamos o array inteiro e encontramos o menor valor: 2.
Depois trocamos 2 com o primeiro elemento.

[2, 3, 8, 4, 5]

Agora a primeira posicao ja esta correta.

Na segunda passada, procuramos o menor valor a partir da segunda posicao:

[3, 8, 4, 5]

O menor ja e 3, entao nao precisamos trocar.

O processo continua ate que todo o array esteja ordenado.

Resumo mental:
Bubble Sort compara vizinhos e empurra o maior para o final.
Selection Sort seleciona o menor valor restante e coloca no inicio.

Complexidade:
Tempo: O(n^2)
Espaco: O(1), desconsiderando a copia criada com spread.


Merge Sort
Ideia central

Merge Sort usa divisão e conquista:

Divide o array em partes menores
Ordena cada parte
*/
