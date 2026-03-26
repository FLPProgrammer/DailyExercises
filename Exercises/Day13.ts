function lengthOfTheLastWord(str: string): number {
    let i = str.length -1;
    let count = 0;


    while(i >= 0 && str[i] === " ") {
        i--
    }

    while(i >= 0 && str[i] !== " ") {
        count++
        i--
    }

    return count;

}

console.log(lengthOfTheLastWord('I FLY OVER THE MOON'));

/*O objetivo do algoritmo é retornar o comprimento da última palavra de uma string.

Para isso, começamos criando um índice i apontando para o final da string.

Em seguida, usamos dois loops while:

O primeiro loop percorre a string de trás para frente ignorando os espaços no final.
O segundo loop continua percorrendo enquanto os caracteres forem diferentes de espaço, contando quantas letras existem na última palavra.

A cada iteração desse segundo loop, incrementamos um contador e decrementamos o índice.

Quando encontramos um espaço, sabemos que a palavra terminou, então retornamos o valor do contador.*/