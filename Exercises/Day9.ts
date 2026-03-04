abstract class Bird {
    abstract move(): void;
}

interface Flyable {
    fly(): void;
}


class Sparrow extends Bird implements Flyable {
    move(): void {
        this.fly();
    }

    fly(): void {
        console.log('The sparrow is flying');
    }
}


class Peguim extends Bird {
    move() {
        console.log('The peguim is moving.')
    }
}

/* Exemplo de Liskov Substitution Principle, onde subclasses podem ser substituídas por suas superclasses sem afetar a funcionalidade do programa.


 /*******************************************************/


class PaymentMethod {
    pay(amount: Number): void {
        
    }
}

class PixPayment extends PaymentMethod {
    pay(amount: number): void {
        console.log(`Paid ${amount} with Pix payment`);
    }
}

class CreditCardPayment extends PaymentMethod {
    pay(amount: number): void {
        console.log(`Paid ${amount} with credit card`);
    }
}

class BitcoinPayment extends PaymentMethod {
    pay(amount: number): void {
        console.log(`Paid ${amount} with bitcoin`);
    }
}

class ApplePayment extends PaymentMethod {
    pay(amount: number): void {
        console.log(`Paid ${amount} with Apple payment`);
    }
}

class Checkout {
    constructor(private paymentMethod: PaymentMethod) {}

    process(amount: number): void {
        this.paymentMethod.pay(amount);
    }
}


const creditCardPayment = new CreditCardPayment();
const checkout1 = new Checkout(creditCardPayment);
checkout1.process(100);

const pixPayment = new PixPayment();
const checkout2 = new Checkout(pixPayment);
checkout2.process(50);

const bitcoinPayment = new BitcoinPayment();
const checkout3 = new Checkout(bitcoinPayment);
checkout3.process(200);

const applePayment = new ApplePayment();
const checkout4 = new Checkout(applePayment);
checkout4.process(150);


/* Aqui implementamos um pequeno exemplo do que seria Injeção de Dependência, onde módulos de alto nível não devem depender de módulos de baixo nível mas ambos devem depender de abstrações*/

interface AttackStrategy {
    attack(): void;
}

class MeleeAttack implements AttackStrategy {
    attack(): void {
        console.log('Attacking with a sword ⚔️');
    }
}

class RangeAttack implements AttackStrategy {
    attack(): void {
        console.log('Attacking with an bow 🏹')
    }
}

class MagicAttack implements AttackStrategy {
    attack(): void {
        console.log('Casting a fire ball 🔥');
    }
}

class PoisonAttack implements AttackStrategy {
    attack(): void {
        console.log('Throwing a poison bomb ☠️')
    }
}

class Character {
    private attacks: AttackStrategy[] = [];

    constructor(private name: string) {};

    addAttackStrategy(strategy: AttackStrategy): void {
        this.attacks.push(strategy);
    }

    performAttack(): void {
        console.log(`${this.name} is attacking!`);
        this.attacks.forEach(attack => attack.attack);
    }
}

const warrior = new Character('Felipe');
warrior.addAttackStrategy(new MeleeAttack);

const archer = new Character('Nelson');
archer.addAttackStrategy(new RangeAttack);

const mage = new Character('Claudinho');
mage.addAttackStrategy(new MagicAttack);

const rogue = new Character('Juliano');
mage.addAttackStrategy(new PoisonAttack);

const superUltraCharacter = new Character('Luquinhas');
superUltraCharacter.addAttackStrategy(new MeleeAttack);
superUltraCharacter.addAttackStrategy(new RangeAttack);
superUltraCharacter.addAttackStrategy(new MagicAttack);
superUltraCharacter.addAttackStrategy(new PoisonAttack);


/* Aqui nesse exercícío implementamos o que seria chamado de composição aonde uma classe é formada por outras classes, nesse exercício aqui temos a classe character que é um personagem que é composto
por diversos tipos de ataques e habilidades, isso faz com que a classe character não seja estática e sim mais flexível, com isso eu posso criar diversos tipos de personagem com diferentes habilidades em sua composição*/