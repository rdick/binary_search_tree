//Trees

// Examples of Trees
//  - HTML DOM 
//  - Networking
//  - AI
//  - Folder in Operating System

class Node {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(val) {
        let newNode = new Node(val)
        console.log(val)
        if (this.root === null) {
            this.root = newNode
            console.log('1')
            return this
        }
        var current = this.root
        console.log('2')
        while (true) {
            if (current.val > val) {
                if (current.left === null) {
                    current.left = newNode
                    return this
                } else {
                    current = current.left
                }
            } else {
                if (current.right === null) {
                    current.right = newNode
                    return this
                } else {
                    current = current.right
                }
            }
        }
    }
}

var tree = new BinarySearchTree()
// tree.root = new Node(10)
// tree.root.right = new Node(15)
// tree.root.left = new Node(7)
// tree.root.left.right = new Node(9)

tree.insert(10)
tree.insert(11)
tree.insert(12)


