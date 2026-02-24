function removeDuplicateElements(nums: number[]): number {
    let uniqueIndex = 0;

    for(let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[uniqueIndex]!) {
            uniqueIndex++
            nums[uniqueIndex] = nums[i]!
        }
    }
    return uniqueIndex + 1
}

/* Esse exercício trabalhemos como remover duplicatas utilizando dois ponteiros, basicamente temos um ponteiro inicial que irá apontar para o primeiro elemento do array
e temos um ponteiro segundário que irá apontar para o segundo elemento do array, caso os dois elementos sejam diferentes o ponteiro do primeiro elemento é incremetado
o que mudará ele para a segunda posição e dai através de um swap passamos para a próxima posição ou seja o anterior recebe a próxima e no ponteiro a próxima posição
é definida via um incremento, utilizemos o operador ! para a segurança de tipagem devido ao fato de que pode haver um retorno null*/


function removeElement(nums: number[], val: number): number {
    let writeIndex = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== val) {
            nums[writeIndex] = nums[i]!;
            writeIndex++
        }
    }
    return writeIndex;
}

/*O exercício tem a ideia de remove os elementos de um array que são iguais a parâmetro val a gente vai percorrer o array e todo o elemento que for igual ao parâmetro val
é ignorado e todo elemento que é diferente do pârametro val é sobrescrito no array e cada vez que isso acontece o writeIndex é incrementado ao final temos um array
sobrescrito que ignora todos elementos igual a val! e o retorno é o número de elementos que foram ignorados por serem iguais a val.*/