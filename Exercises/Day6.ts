abstract class Shape {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    describe() {
        return `O nome dessa forma é ${this.name}`
    }

    abstract getArea(): number;
}


class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
        super("Circle");
        this.radius = radius;
    }

    describe() {
        return `O nome dessa forma é ${this.name}`;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        super("Rectangle")
        this.width = width;
        this.height = height;
    }

    describe() {
        return `O nome dessa forma é ${this.name}`;
    }

    getArea(): number {
        return this.width * this.height;
    }
}

const myCircle = new Circle(5);
console.log(myCircle.describe);
console.log(myCircle.getArea);

const myRectangle = new Rectangle(10, 5);
console.log(myRectangle.describe);
console.log(myRectangle.getArea);


/*Nesse exercícios implementamos o uso do conceito Herança aonde classes filhas herdam propriedades e métodos
de uma classe pai, ou molde, é muito útil para não haver repetição de código, também fizemos a implementação do
conceito de polimorfismo aonde a estrutura será a mesma da classe pai/molde mas a forma de manifestar será diferente,
a classe molde ou a classe abstrata é um tipo de classe que não pode ser instânciada apenas herdada, pode ter propriedades
construtor, métodos obrigatórios (abstratos) e métodos prontos, as classes abstratas permitem centralização e evita duplicação
e cria lógica comum para métodos por exemplo: describe();

/*
✔ Quando usar abstract vs interface

✅ Use abstract class quando:

Precisa compartilhar código

Quer propriedades e construtor

Existe relação de herança forte

Quer lógica comum

✅ Use interface quando:

Só quer definir contrato

Classes não têm relação direta

Precisa de flexibilidade

Trabalha com múltiplas implementações*/


interface DiscountStrategy {
    apply(price: number): number;
}

type Product = {
    name: string,
    price: number;
}


class RegularDiscount implements DiscountStrategy {
    apply(price: number): number {
        return price * 0.95;
    }
}

class PremiumClientDiscount implements DiscountStrategy {
    apply(price: number) {
        return price * 0.90;
    }
}

class VipClientDiscount implements DiscountStrategy {
    apply(price: number) {
        return price * 0.80;
    }
}

class DiscountCalculator {
    constructor(private strategy: DiscountStrategy) {}

    calculate(product: Product) {
        return this.strategy.apply(product.price)
    }
}

const product: Product = {
    name: 'Notebook',
    price: 1000
}

const regular = new DiscountCalculator(new RegularDiscount());
console.log(regular.calculate(product));

const premium =  new DiscountCalculator(new PremiumClientDiscount());
console.log(premium.calculate(product));

const vip = new DiscountCalculator(new VipClientDiscount());
console.log(vip.calculate(product));


/*Nesse exercício utilizemos um princípio muito importante de SOLID que é o open/closed ou seja aberto para extensão fechado para modificação
além também de possuir abstração aonde o nosso código surgiu de uma interface ou seja usemos a interface para fazer todas as abstrações de pagamento,
o que por sua vez encadeou um polimorfismo cada cliente vai ter seu disconto diferente de acordo com a sua categoria,
e também note que utilizemos inversão de dependência aonde o nosso DiscountCalculator não vai depender de uma classe e sim de uma Abstração DiscountStrategy*/

