function greetings(): void {
  console.log('Olá, Felipe');
}

function sum(a: number, b: number): number {
  return a + b;
}

function double(a: number): number {
  return a * 2;
}

function evenOrOdd(num: number): string {
  return num % 2 === 0 ? 'This number is even' : 'This number is odd';
}

function minorOrAdult(age: number): string {
  return age >= 18 ? 'Adult!' : 'Minor!';
}

function studentStatus(grade: number): string {
  if (grade < 0 || grade > 10) return 'This grade does not work';

  if (grade >= 6) return 'Approved';
  if (grade >= 3) return 'Recovery';
  
  return 'Reproved';
}

function printNumbers(): void {
  const limit = 20;

  for (let i = 1; i <= limit; i++) {
    console.log(i);
  }
}

function sumAllNumbers(numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

function countEvenNumbers(numbers: number[]): number {
  let count = 0;

  for (const num of numbers) {
    if (num % 2 === 0) count++;
  }

  return count;
}

function biggest(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error('Array vazio');
  }

  let biggest = numbers[0];

  for (const num of numbers) {
    if (num > biggest) {
      biggest = num;
    }
  }

  return biggest;
}

function smallest(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error('Array vazio');
  }

  return numbers.reduce((min, num) => (num < min ? num : min));
}

function invertArray<T>(array: T[]): T[] {
    const result: T[] = [];

    for(let i = array.length - 1; i >= 0; i--) {
        result.push(array[i]);
    }
    return result;
}


/*O objetivo desse dia foi treinar alguns fundamentos da programação, e para os próximos dias estarei resolvendo uma lista imensa de exercícios de programação
para saber programar desde as fundações mais básicas, fazendo tudo isso busco aumentar a capacidade de criar e entender código de maneira lógica e racional./*