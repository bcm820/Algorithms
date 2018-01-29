
class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {

    constructor() {
        this.root = null
    }

    insert(value) {
        if (!this.root) {
            this.root = new Node(value)
            return this
        }
        let rInsert = (node, value) => {
            switch (true) {
                case (value < node.value && !node.left):
                    node.left = new Node(value)
                    break
                case (value > node.value && !node.right):
                    node.right = new Node(value)
                    break
                case value < node.value:
                    rInsert(node.left, value)
                    break
                default:
                    rInsert(node.right, value)
            }
        }
        rInsert(this.root, value)
        return this
    }

    insertMany(...values) {
        values.forEach(value => {
            this.insert(value)
        })
    }

    size() {
        if (!this.root) return 0
        let count = 1
        let rCount = node => {
            if (!node.left && !node.right) return
            if (node.left) {
                count++
                rCount(node.left)
            }
            if (node.right) {
                count++
                rCount(node.right)
            }
        }
        rCount(this.root)
        return count
    }

    height() {
        if (!this.root) return 0
        let size = this.size()
        let main = 1
        let measure = (node, branch) => {
            if (!node.left && !node.right) return
            if (node.left) {
                let leftBranch = branch
                leftBranch++
                if (main < leftBranch) main = leftBranch
                measure(node.left, leftBranch)
            }
            if (node.right) {
                let rightBranch = branch
                rightBranch++
                if (main < rightBranch) main = rightBranch
                measure(node.right, rightBranch)
            }
        }
        measure(this.root, main)
        return main
    }

    contains(value) {
        if (!this.root) return false
        let rContains = node => {
            switch (true) {
                case node.value === value: return true
                case node.value > value:
                    if (!node.left) return false
                    return rContains(node.left)
                default:
                    if (!node.right) return false
                    return rContains(node.right)
            }
        }
        return rContains(this.root)
    }

    find(value) {
        if (!this.root) return null
        let rFind = node => {
            switch (true) {
                case node.value === value: return node
                case node.value > value:
                    if (!node.left) return null
                    return rFind(node.left)
                default:
                    if (!node.right) return null
                    return rFind(node.right)
            }
        }
        return rFind(this.root)
    }

    remove(value) {
        const node = this.find(value)
        if (!node) return null
        if (node.left && node.right) {
            /*
            * If the node to be removed has both left and right children,
            * replace the node's value by the minimum value of the right
            * sub-tree, and remove the leave containing the value
            */
        }
    }

    inOrder() {
        //
    }

    preOrder() {
        //
    }

    postOrder() {
        //
    }

}

let bst = new BST()
bst.insert(10).insert(20).insert(30).insert(40).insert(50)
bst.insertMany(2, 3, 11, 14, 18, 21, 23, 51, 52, 53, 54, 55)