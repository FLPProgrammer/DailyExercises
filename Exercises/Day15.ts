/*class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

function reverseLinkedList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;
    let current = head;

    while(current) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}

function printLinkedList(head: ListNode | null): void {
    let current = head;
    
    while(current) {
        console.log(current.value);
        current = current.next;
    }
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);

node1.next = node2;
node2.next = node3;

const newHead = reverseLinkedList(node1);
printLinkedList(newHead)*/


/* Nesse exercício, criamos a classe ListNode, que representa um nó da lista com um valor e um ponteiro para o próximo.

Na função reverseLinkedList, recebemos o início da lista (head) e usamos dois ponteiros:

prev (anterior), que começa como null
current (atual), que começa no head

Enquanto percorremos a lista:

Guardamos o próximo nó
Fazemos o nó atual apontar para o anterior (invertendo a lista)
Avançamos os ponteiros

No final, prev será o novo início da lista invertida.

Na função printLinkedList, percorremos a lista do início até o fim, imprimindo cada valor.

Por fim, criamos a lista 1 -> 2 -> 3 para testar.*/

/*==============================================================================================*/

/*class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;

    }
}
function hasCycle(head: ListNode | null): boolean {
    let slow = head;
    let fast = head;

    while(fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;

        if(slow === fast) return true;
    }

    return false;
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;

console.log('Tem ciclo: ' + hasCycle(node1))*/


/* Nesse exercício, definimos uma classe ListNode que representa um nó de uma lista ligada, contendo um valor e uma referência para o próximo nó.

Na função hasCycle, recebemos o head da lista e utilizamos dois ponteiros: slow e fast.

O ponteiro slow avança um nó por vez, enquanto o fast avança dois nós por vez.

Enquanto fast e fast.next existirem, continuamos o loop. A cada iteração, verificamos se slow e fast apontam para o mesmo nó.

Se isso acontecer, significa que existe um ciclo na lista, pois o ponteiro rápido alcançou o lento dentro do ciclo.

Caso o loop termine sem que eles se encontrem, retornamos false, indicando que a lista não possui ciclo.*/
