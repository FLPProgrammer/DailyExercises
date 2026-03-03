const multiply = (a: number) => (b: number) => a * b;

const double = multiply(2);
const triple = multiply(3);
console.log(double(5));
console.log(triple(5));

/************************************************/

function MapWith<T, R>(fn: (value: T) => R) {
    return function(array: T[]): R[] {
        return array.map(fn)
    }
}

const doubleAll = MapWith((n: number) => n * 2)

console.log(doubleAll([2,4,6]))


/*Aqui implementamos o que seria um currying um curriyng é uma função que recebe uma função e retorna outra função, o objetivo é pegar uma função que recebe vários dados
e transformar ela e funções menores que recebem um dado e retornam outra função isso é útil para criar variações de funções genéricas.*/


type User = {
    name: string;
    age: number;
    active: boolean;
};

const pipe =
  <A, B, C, D, E>(
    f1: (a: A) => B,
    f2: (b: B) => C,
    f3: (c: C) => D,
    f4: (d: D) => E
  ) =>
  (value: A): E =>
    f4(f3(f2(f1(value))));


const filterActive = (users: User[]) => users.filter(user => user.active);
const filterAdults = (users: User[]) => users.filter(user => user.age >= 18);
const getNames = (users: User[]) => users.map(user => user.name);
const toUpperCase = (names: string[]) => names.map(name => name.toUpperCase());

const users: User[] = [
    { name: 'Alice', age: 25, active: true },
    { name: 'Bob', age: 17, active: true},
    { name: 'Charlie', age: 30, active: false}
]

const processUsers = pipe(
    filterActive,
    filterAdults,
    getNames,
    toUpperCase
)


console.log(processUsers(users))


/* Nesse exercício implementamos uma pipe que é uma função composta de várias pequenas funções que fazem modificações em um determinado dado, o objetivo foi filtrar uma lista de usuários,
e modificar os nomes dos usuários ativos, dos maiores de idade, obter o nome dos usuários e transformar os dados do campo nome para upperCase, basicamente os ensinamentos extraídos foram que,
uma pipe é um conjunto de funções que recebem um dado e retornam outro dado separadamente e que cada modificação é feita por uma função diferente*/
 