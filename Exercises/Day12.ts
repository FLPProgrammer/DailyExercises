function strStr(haystack: string, needle: string): number {
    const n = haystack.length;
    const m = haystack.length;

    for(let i = 0; i <= n - m; i++){
        let j = 0;
        while (j < m && haystack[i + j] === needle[j]) {
            j++
        }
        if(j === m) {
            return i;
        }
    }
    return -1;
}

console.log(strStr('sadbutsad', 'sad'));

/*Eu percorro o haystack usando i como ponto inicial.
Para cada posição, comparo o needle caractere por caractere usando j.
Se todos os caracteres coincidirem (j === needle.length), retorno i.
Caso contrário, continuo até o fim.
Se não encontrar, retorno -1.*/