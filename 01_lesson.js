//Trees

// Examples of Trees
//  - HTML DOM 
//  - Networking
//  - AI
//  - Folder in Operating System

// BIG O of Binary Search Trees
// - insertion - O (log N)
// - searching - O (log N)

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
            return this
        }
        var current = this.root
        while (true) {
            if (val === current.val) return undefined
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
    find(val) {
        if (this.root === null) return false

        let current = this.root
        let found = false

        while (current && !found) {
            if (val < current.val) {
                current = current.left
            } else if (val > current.val) {
                current = current.right
            } else {
                found = true
            }
        }
        return current
    }
}

var tree = new BinarySearchTree()
// tree.root = new Node(10)
// tree.root.right = new Node(15)
// tree.root.left = new Node(7)
// tree.root.left.right = new Node(9)

tree.insert(9)
tree.insert(11)
tree.insert(12)
tree.find(12)


