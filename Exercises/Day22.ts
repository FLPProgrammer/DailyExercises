function countWordFrequency(phrase: string): Record<string, number> {
    const result: Record<string, number> = {};

    const words = phrase.toLowerCase().replace(/[.,!?;:]/g, "").split(/\s+/)

    for(const word of words) {
        if(word) {
            result[word] = (result[word] || 0) + 1;
        }
    }

    return result;
}

function sortArray(array: number[]): number[] {
    const result = [...array];

    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result.length - 1; j++) {
            if (result[j]! > result[j + 1]!) {
                const temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }
    }
    return result;
}



/*No dia de hoje resolvimos o algoritmo básico de contar a frequencia de palavras em uma string, dividimos a string no espaços em brancos deixando cada palavra separada isoladamente,
tratamos a mesma com REGEX para eliminar possíveis espaços em branco caracteres especiais, mapeamos o array formado a partir das palavras e verificamos se a palavra existe dentro do map
se tiver incrementamos 1 na quantidade caso contrário setamos a palavra com o valor inicial de 0 ao final do programa retornamos o resultado.*/

/*O segundo exercício de hoje foi propós que ordenacemos um array na mão, esse algoritmo é um algoritmo com notação quadrática mas é um excelente algoritmo para entender como um array é ordenado.
manualmente*/