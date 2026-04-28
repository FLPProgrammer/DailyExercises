function findUniqueElements(nums: number[]): number[] {
    const frequency = new Map<number,number>();


    for(const num of nums) {
        frequency.set(num, (frequency.get(num) || 0) + 1);
    }

    const result: number[] = [];

    for(const [num, count] of frequency) {
        if(count === 1) {
            result.push(num);
        }
    }
    return result;
}

/*
Neste exercício recebemos uma lista de números e o objetivo é encontrar
quais valores aparecem apenas uma vez.

Primeiro, percorremos o array e criamos um HashMap (Map) para registrar
cada número e sua frequência, usando pares de chave e valor:

número -> quantidade de vezes que aparece

Exemplos:

2 => 2
1 => 1

Isso significa que o número 2 apareceu duas vezes e o número 1 apenas uma.

Durante esse percurso, se o número já existir no Map, incrementamos sua
contagem; se ainda não existir, começamos com 1.

Depois, percorremos o Map verificando cada número e sua respectiva contagem.

Se a contagem for igual a 1:

count === 1

significa que esse número apareceu apenas uma vez, então adicionamos
esse valor ao array result com push().

Ao final, retornamos o array contendo apenas os números únicos.
*/

function organizeNumbers(nums: number[]): string {
    const evenArray: number[] = [];
    const oddArray: number[] = [];

    for(const num of nums) {
        num % 2 === 0 ? evenArray.push(num) : oddArray.push(num);
    }
    return `\nEven Numbers: [${evenArray}]\nOdd Numbers: [${oddArray}]`;
}

console.log(organizeNumbers([1,2,3,4,5,6,7,8,9,10]))

/*
Neste exercício recebemos uma lista de números e o objetivo é agrupar
os valores em duas categorias: pares e ímpares.

Para isso criamos dois arrays:

- evenArray para armazenar números pares
- oddArray para armazenar números ímpares

Depois percorremos o array original e, para cada número, verificamos:

num % 2 === 0

Se o resto da divisão por 2 for zero, o número é par e adicionamos em
evenArray com push().

Caso contrário, o número é ímpar e adicionamos em oddArray.

Foi usado um operador ternário para fazer essa decisão:

num % 2 === 0
 ? evenArray.push(num)
 : oddArray.push(num);

Ao final retornamos uma string mostrando os dois grupos organizados.
*/