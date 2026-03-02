class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}


function sortedArrayTOBST(nums: number[]): TreeNode | null {

    function build(right: number, left: number): TreeNode | null {
        if( left> right) return null;

        const mid = Math.floor((left + right) / 2);

        const node = new TreeNode(nums[mid]);

        node.left = build(mid - 1, left);
        node.right = build(right, mid + 1);

        return node;
    }
    return build(nums.length - 1, 0);
}

console.log(sortedArrayTOBST([-10, -3, 0, 5, 9]));

/* Objetivo desse algoritmo é transformar um array ordenado em uma árvore binária em busca de balanceamento.
A ideia principal é pegar o array dividir ele ao meio e partir do elemento mais ao meio definir os nós que vão ficar
a esquerda e definir os nós que vão ficar a direita, isso é feito de uma forma recursiva usando a própria função de build,
que recebe o índice do elemento mais a direita eo índice do elemento mais a esquerda e a cada interação os  índices vão se atualizando,
até que o índice da esquerda seja maior que o índice da direita.*/