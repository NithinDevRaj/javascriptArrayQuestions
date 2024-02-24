class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    isEmpty() {
        return this.root === null
    }
    insert(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.root = node
        } else {
            this.insertNode(this.root, node)
        }
    }
    insertNode(root, node) {
        if (node.value < root.value) {
            if (!root.left) root.left = node;
            else {
                this.insertNode(root.left, node)
            }

        } else {
            if (!root.right) root.right = node;
            else {
                this.insertNode(root.right, node)
            }
        }
    }
    search(root, value) {
        if (!root) {
            return 'element is not found'
        }
        if (value === root.value) {
            return true
        } else if (value > root.value) {
            return this.search(root.right, value)
        } else {
            return this.search(root.left, value)
        }

    }

}


const bst = new BinarySearchTree()
bst.insert(10)
bst.insert(5)
bst.insert(15)
console.log(bst.isEmpty())
console.log(bst.search(bst.root,5))
console.log(bst.search(bst.root,10))
console.log(bst.search(bst.root,6))