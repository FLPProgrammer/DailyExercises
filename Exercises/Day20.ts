function invertString(str: string): string {
    const newString: string[] = [];

    for(let i = str.length - 1; i >= 0; i--) {
         newString.push(str[i]!);
    }

    return newString.join('');
}


function invertString2(str: string): string {
    return str.split('').reverse().join('')
}

function countVowels(str: string): string {
    let count = 0;

    for(const char of str) {
        if(char === "a" || char === 'e' || char === 'i' || char === 'o' || char === 'u') count += 1;
    }

    return `Essa string tem ${count} vogais`;
}

function isPalindrome(str: string): boolean {
    const cleanStr = str.toLowerCase().trim();
    const invertedStr = cleanStr.split('').reverse().join('')

    return cleanStr === invertedStr;
}


function fizzBuzz(num: number): void {
    
    for(let i = 1; i <= num; i++) {
        let result = '';
        if(i % 3 === 0) result += 'Fizz';
        if(i % 5 === 0) result += 'Buzz';
         
        console.log(result || i)
    }
}

function segundoMaior(nums: number[]): number | null {
    if(nums.length < 2) return null;

    let maior = -Infinity;
    let segundoMaior = -Infinity;

    for(let num of nums) {
        if(num > maior) {
            segundoMaior = maior;
            maior = num;
        } else if(num > segundoMaior && num !== maior) {
            segundoMaior = num;
        }
    }
    return segundoMaior === -Infinity ? null : segundoMaior;
}


function removeDuplicates<T>(array: T[]): T[] {
    return [... new Set(array)];
}

function removeDuplicates2<T>(array: T[]): T[] {
    const cleanArray: T[] = [];

    for(let element of array) {
        if(!cleanArray.includes(element)) cleanArray.push(element);
    }

    return cleanArray;
}

function removeDuplicates3<T>(array: T[]): Set<T> {
   const mySet = new Set<T>();

   for(let element of array) {
        mySet.add(element);
   }
   return mySet;
}


interface User  {
    name: string;
    age: number;
    email: string;
}

function returnUserInformation(user: User): string {
    return `Nome: ${user.name} Idade: ${user.age}`
}


const users: User[] = [
    {name: 'Felipe', age: 25, email: 'lplpfwr@gmail.com'},
    {name: 'Maria', age: 18, email: 'maria@email.com'},
    {name: 'Carlos', age: 17, email: 'carlos@email.com'},
    {name: 'Juliana', age: 16, email: 'juliana@email.com'}
];

function filterOver18(users: User[]): User[] {
    return users.filter((user) => user.age >= 18);
}

console.log(filterOver18(users));



/*Esta é uma série de exercícios básicos para treinar a lógica, explorar as nuances do TypeScript e fortalecer as bases de forma simples e prática.*/