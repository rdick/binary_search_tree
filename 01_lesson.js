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
    bfs() {
        let node = this.root,
            queue = [],
            data = [];

        queue.push(this.root)
        while (queue.length) {
            node = queue.shift()
            data.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        return data
    }
    dfs_preorder() {
        let data = []

        let current = this.root

        const traverse = node => {
            data.push(node.val)
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
        }

        traverse(current)
        return data
    }
    dfs_postorder() {
        let data = []

        let current = this.root

        const traverse = node => {
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
            data.push(node.val)
        }

        traverse(current)
        return data
    }
}

var tree = new BinarySearchTree()

// tree.insert(9)

// tree.insert(11)
// tree.insert(12)
// tree.find(12)

tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
tree.dfs_preorder()




