class TreeNode {
    value: number;
    left: TreeNode | null;
    right : TreeNode | null;

    constructor(
        value: number,
        left: TreeNode | null = null,
        right: TreeNode | null = null
    ) {
        this.value = value;
        this.left = left;
        this.right = right
    }
}

class BinaryTree {
    root: TreeNode | null;

    constructor() {
        this.root = null;
    }

 insert(val: number) {
  const newNode = new TreeNode(val);

  if (!this.root) {
    this.root = newNode;
    return;
  }

  const queue: TreeNode[] = [this.root];

  while (queue.length > 0) {
    const node = queue.shift()!;

    if (!node.left) {
      node.left = newNode;
      return;
    } else {
      queue.push(node.left);
    }

    if (!node.right) {
      node.right = newNode;
      return;
    } else {
      queue.push(node.right);
    }
  }
}

inOrder(node: TreeNode | null = this.root) {
    if(!node) return;

    this.inOrder(node.left);
    console.log(node.value);
    this.inOrder(node.right);
}

preOrder(node: TreeNode | null = this.root) {
    if(!node) return;

    console.log(node.value)
    this.preOrder(node.left);
    this.preOrder(node.right);
}

postOrder(node: TreeNode | null = this.root) {
    if(!node) return;

    this.postOrder(node.left);
    this.postOrder(node.right);
    console.log(node.value);
}

bfs() {
    if(!this.root) return;

    const queue: TreeNode[] = [this.root];

    while(queue.length > 0) {
        const node = queue.shift()!;
        console.log(node.value);

        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }
}

}

const tree = new BinaryTree();

tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);

