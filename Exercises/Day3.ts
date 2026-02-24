type Product = {
    name: string;
    price: number;
};

function applyDiscount(product: Product): Product {
    return {
        ...product,
        price: product.price * 0.9,
    }
}

function applyTax(product: Product): Product {
    return {
        ...product,
        price: product.price * 1.05
    }
}

function formatCurrency(product: Product): string {
    return `R$ ${product.price.toFixed(2)}`;
}


const pipe = (...fns: Function[]) => {
    return (value: any) => {
        return fns.reduce((acc, fn) => fn(acc), value)
    }
}
const product: Product = {name: 'Computer', price: 2000};

const processProduct = pipe(
    applyDiscount,
    applyTax,
    formatCurrency
)

/*console.log(processProduct(product))*/

/***********************************************/

/* O objetivo desse exercício foi colocar em prática uma pipe para ver o funcionamento de várias funções ao mesmo tempo processando os dados de maneira sequêncial,
descobri que ao utilizar pipes posso tornar meu código mais reutilizável, e posso aplicar quantos funções eu achar necessário em um determinado tipo de dado,
respeitando sempre a regra de programação funcional que é o princípio da imutabilidade não podem se transformar em outra coisa*/



const isNotEmpty = (value: string) => 
    value.trim().length > 0 ? null : `Não contem nenhum elemento`;

const minLength = (size: number) => (value: string) =>
    value.length >= size ? null : `O valor mínimo de caracteres deve ser ${size}`

const hasNumber = (value: string) => 
    /\d/.test(value) ? null : 'Precisa conter um número'



const rules = [
  isNotEmpty,
  minLength(6),
  hasNumber
];

const validate = (value: string) => {
  const errors = rules
    .map(rule => rule(value))
    .filter(error => error !== null);

  return errors;
};

/* Basicamente o objetivo desse exercício foi criar pequenas funções que fazem algumas validações específicas muito utilizadas em sistemas reais, como verificar
se uma propriedade está vazia, tamanho mínimo da mesma, e se possui valores númericos, e depois fizemos uma composição aonde agregamos todas essas pequenas funções
em ordem para retornar uma lista de possíveis erros encontrados */


