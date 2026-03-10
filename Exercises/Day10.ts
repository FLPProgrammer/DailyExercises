type Person = {
    name: string;
    city: string;
}

const people: Person[] = [
    {name: "Ana", city: "SP"},
    { name: "João", city: "RJ" },
    { name: "Maria", city: "SP" },
    { name: "Pedro", city: "RJ" }
]

const groupByCity = (list: Person[]) => {
    return list.reduce((acc, person) => {
        const key = person.city;

        if(!acc[key]) {
            acc[key] = [];
        }

        acc[key].push(person);

        return acc;
    }, {} as Record<string, Person[]>)
}

const result = groupByCity(people);
console.log(result);


/*Nesse exercício estamos pegando uma lista de pessoas e separando as mesmas por cidade,
usando conceitos de programação funcional, o objetivo foi realizar essa tarefa sem loops e apenas com
a função de alta ordem reduce(), temos um acumulator e pessoas, passado como parâmetros para essa função
em seguida defimos a cidade das pessoas como chave que será utilizada para criar as chaves dos objetos, e realizar
a separação em grupos verificamos se há uma chave se não há uma criamos, depois o usuário é empurrado para dentro desse objeto
como valor dessa chave e depois retornamos o acumlador, que será basicamente um objeto com uma chave do tipo string e um valor de tipo
Person[] (array)*/