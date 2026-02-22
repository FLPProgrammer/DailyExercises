const double = (n: number): number => n * 2;
const addTen = (n: number): number => n + 10;
const toString = (n: number) => n.toString();

const pipe =
  (...fns: Function[]) =>
  (value: any) =>
    fns.reduce((acc, fn) => fn(acc), value);


const transform = pipe(double, addTen, toString);

/*console.log(transform(5))*/

/* O objetivo de de uma pipe de funções é ter várias funções menores que possam ser chamadas
quando for necessário, isso ajuda a reutilizar o código e usar funções recorrentes de maneira mais
fácil no sistema */


/* 2. Contador de Ocorrências [ Reduce ] */

function countOcurrences(strs: string[]): Record<string, number> {
    return strs.reduce((acc: Record<string, number>, currentValue: string) => {
        if(acc[currentValue]) {
            acc[currentValue]++
        } else {
            acc[currentValue] = 1;
        }

        return acc
    }, {})
};

/*Esse é um contador de ocorrência criado a partir de uma função reduce o que faz com que o código fique
mais enxuto bonito e elegante, esse exercício é prático e trabalha de forma extensiva a manipulação de objetos*/


/* 3. Função flatten (recursão + funcional) */

function flatten(array: any[]): any[] {
    return array.reduce((acc, currentArray) => {
        if(Array.isArray(currentArray)) {
            return [...acc, ...flatten(currentArray)];
        }
        return [...acc, currentArray];
    },[])
}

console.log(flatten([2,3,4,5,[4,4,5,6,[5]]]))

/* O objetivo desse exercício foi resolver o problema de arrays aninhados sem a função flatten mas sim utilizando uma função recursiva juntamente com a função Reduce */