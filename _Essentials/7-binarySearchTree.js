
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
        return this
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

    findParent(value) {
        if (!this.root) return null
        let parent
        let rFind = node => {
            switch (true) {
                case (node.left && node.left.value === value):
                    parent = node
                    break
                case (node.right && node.right.value === value):
                    parent = node
                    break
                case (node.left && node.value > value): rFind(node.left)
                case (node.right && node.value < value): rFind(node.right)
            }
        }
        rFind(this.root)
        return parent
    }

    findMin(node = this.root) {
        let min = node
        while (min.left) min = min.left
        return min
    }

    findMax(node = this.root) {
        let max = node
        while (max.right) max = max.right
        return max
    }

    remove(value) {
        const node = this.find(value)
        if (!node) return null
        if (node.left && node.right) {
            const replacement = this.findMin(node.right)
            this.remove(replacement.value)
            node.value = replacement.value
        } else {
            const parent = this.findParent(value)
            switch (true) {
                case value < parent.value:
                    if (node.left) parent.left = node.left
                    else parent.left = null
                    break
                case value > parent.value:
                    if (node.right) parent.right = node.right
                    else parent.right = null
                    break
            }
        }
    }

    preOrder() {
        if (!this.root) return this
        const rPreOrder = node => {
            console.log(node.value)
            if (node.left) rPreOrder(node.left)
            if (node.right) rPreOrder(node.right)
        }
        rPreOrder(this.root)
        return this
    }

    inOrder() {
        if (!this.root) return
        const rInOrder = node => {
            if (node.left) rInOrder(node.left)
            console.log(node.value)
            if (node.right) rInOrder(node.right)
        }
        rInOrder(this.root)
        return this
    }

    postOrder() {
        if (!this.root) return
        const rPostOrder = node => {
            if (node.left) rPostOrder(node.left)
            if (node.right) rPostOrder(node.right)
            console.log(node.value)
        }
        rPostOrder(this.root)
        return this
    }

}