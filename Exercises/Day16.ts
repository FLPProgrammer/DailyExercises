function generate(numRows: number): number[][] {
    const result: number[][] = [];

    for(let i = 0; i < numRows; i++) {
        let row: number[] = [];

        for(let j = 0; j <= i; j++) {

            if(j == 0 || j === i) {
                row.push(1);
            }

            else {
                row.push(result[i - 1]![j - 1]! + result[i - 1]![j]!)
            }
        }
        result.push(row)
    }
    return result;
};

console.log(generate(5));

/*O objetivo desse algoritmo é gerar o Triângulo de Pascal com a quantidade de linhas informada.

Primeiro, criamos um array chamado `result` que vai armazenar todas as linhas do triângulo.

Depois, usamos um loop com a variável `i` para percorrer cada linha. Para cada linha, criamos um novo array chamado `row`, que representa a linha atual.

Dentro desse loop, usamos outro loop com a variável `j` para percorrer cada posição da linha.

Se estivermos na primeira posição (`j == 0`) ou na última posição (`j === i`), adicionamos o valor 1, pois todas as linhas do Triângulo de Pascal começam e terminam com 1.

Caso contrário, calculamos o valor somando dois números da linha anterior: o elemento da posição `j - 1` e o elemento da posição `j`. Esses são os dois valores diretamente acima do número atual.

Após montar toda a linha, adicionamos ela ao array `result`.

No final, retornamos `result`, que contém todas as linhas do Triângulo de Pascal.
*/