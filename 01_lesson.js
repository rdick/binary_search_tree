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
}

var tree = new BinarySearchTree()
tree.root = new Node(10)
tree.root.right = new Node(15)
tree.root.right = new Node(7)
