function addBinary(a: string, b: string): string {
    let i = a.length -1;
    let j = b.length -1;
    let carry = 0;

    const result: string[] = [];

    while(i >= 0 ||  j >= 0 || carry !== 0) {
        let sum = carry;

        if(i >= 0) sum += a.charCodeAt(i--) - 48;
        if(j >= 0) sum += b.charCodeAt(j--) - 48;

        result.push(String(sum % 2));
        carry = sum >> 1;
    }

    return result.reverse().join('');
    }


console.log(addBinary("11", "1")); 

/*Esse algoritmo percorre as duas strings de trás para frente usando dois ponteiros, simulando a soma binária manual.

Em cada iteração, somamos os dígitos atuais das duas strings junto com o carry (vai-um da soma anterior).

O resultado da soma gera dois valores:
- o bit atual, que é sum % 2
- o novo carry, que é Math.floor(sum / 2)

Continuamos o loop enquanto ainda houver dígitos para processar ou um carry restante.

Os resultados são armazenados em ordem reversa, então ao final invertimos para obter o valor correto.*/