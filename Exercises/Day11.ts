function isValid(s: string): boolean {
    const map: Record<string, string> = {
        ')' : '(',
        '}' : '{',
        ']' : '[',
    }

    const stack: string[] = [];

    for (const char of s) {
        
        if (map[char]) {
    
            const topElement = stack.length === 0 ? '#' : stack.pop();

            if (topElement !== map[char]) {
                return false;
            }
        } 
        
        else {
            stack.push(char); 
        }
    }
    
    return stack.length === 0;
}

console.log(isValid('()'))


/* Objetivo principal desse exercício é manipular strings com o auxílio de um HashMap para acelerar a procura dos elementos e fazer
com que as comparações sejam mais rápidas e eficientes, a lógica desse exercício é simples, se todas as chaves que abrirem ou qualquer
outro dos dois elementos ali presentes acharem seus pares a função retorna true, caso contrário, seja qualquer outro caracter é retornado false*/
