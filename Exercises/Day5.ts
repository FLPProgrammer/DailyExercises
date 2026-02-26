class BankAccount {
   private owner: string;
    private balance: number;

    constructor(owner: string, balance: number) {
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount: number): void {
        if(amount <= 0) {
            throw new Error('O valor precisa ser maior do que 0!');
        }
         this.balance += amount;
    }

    withdraw(amount: number) {
        if(amount > this.balance) {
            throw new Error('Saldo insuficiente')
        }
         this.balance -= amount;
    }

    getBalance() {      
        return this.balance;
    }
}
/*=====================================================*/

class User {
    private email: string;
    private password: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
        this.setPassword(password);
    }

    setPassword(password: string) {
        if(password.length < 6) {
            throw new Error('A senha deve ter pelo menos 6 caracteres')
        }
        this.password = password;

    }

    validatePassword(password: string): boolean {
        return this.password === password;
    }
}

/*=====================================================*/

class Employee {
    name: string;
    salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    work() {
    return `${this.name} is working.`
    }
}

class Developer extends Employee {
    constructor(name: string, salary: number) {
        super(name, salary);
    }

    code() { 
        return `${this.name} is coding`;
    }
}

class Engineer extends Employee {

    calculate() {
        return `${this.name} is calculating`;
    }
}

class Cleaner extends Employee {

    clean() {
        return `${this.name} is cleaning`;
    }
}

/*=====================================================*/


interface PaymentMethod {
    pay(amount: number): void;
}


class CreditCard implements PaymentMethod {
    private cardNumber: string;  
    constructor(cardNumber: string) {
        this.cardNumber = cardNumber;
    }

    pay(amount: number): void  {
        console.log(`Pagamento de ${amount} realizado via cartão de crédito`)
    }
}


class Pix implements PaymentMethod {
    private pixKey: string;
    constructor(pixKey: string) {
        this.pixKey = pixKey;
    }

    pay(amount: number): void {
    console.log(`Pagamento de ${amount} reais via Pix`) 
    }
}

class Boleto implements PaymentMethod {
    private barcode: string;
    constructor(barcode: string) {
        this.barcode = barcode;
    }

    pay(amount: number): void {
        console.log(`Pagamento de ${amount} reais via boleto`)
    }
}


/* O objetivos desses exercícios foi retomar a programação orientada a objeto desde o mais simples,
com o passar dos dias irei progredindo e aumentando a dificuldade, foi implementado o conhecimento de 
encapsulamento aonde a classe esconde os seus detalhes internos e permite apenas acesso controlado,
também foi utilizado o conhecimento de abstração aonde uma classe deve fazer algo sem precisar dizer como,
no exemplo dos códigos assim temos métodos de pagamento que herdam a interface pagamento, podendo assim diversificar
o tipo pagamento, herança foi aplicado também para que o codigo fique reutilizável, e também o polimorfismo que por
sua vez torna o código polimorfo ou seja com diversas caras, por exemplo a classe employee pode virar vários
empregados diferentes com profissões diferentes*/

/*O príncipio da responsabilidade única também foi aplicado, ou seja cada classe, função tem apenas um uso específico e claro,
evitando classes e funções extremamentes grandes com diversas funcionalidades diferentes*/