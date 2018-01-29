
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {

    constructor() {
        this.head = null
        this.count = 0
    }

    insert(value) {
        if (!this.head) this.head = new Node(value)
        else {
            let ptr = this.head
            while (ptr.next) ptr = ptr.next
            ptr.next = new Node(value)
        }
        this.count++
        return this
    }

    removeLast() {
        if (!this.head) return null
        else {
            let ptr = this.head
            while (ptr.next.next) ptr = ptr.next
            let node = ptr.next
            ptr.next = null
            this.count--
            return node
        }
    }

    removeFront() {
        if (!this.head) return null
        else if (this.head.next) {
            let node = this.head
            this.head = this.head.next
            this.count--
            return node
        }
        else {
            let node = this.head
            this.head = null
            this.count--
            return node
        }
    }

    remove(value) {
        if (!this.head) return null
        else {
            let ptr = this.head
            if (ptr.value === value) {
                return this.removeFront()
            }
            while (ptr.next) {
                if (ptr.next.value === value) {
                    let node = ptr.next
                    if (ptr.next.next)
                        ptr.next = ptr.next.next
                    else ptr.next = null
                    this.count--
                    return node
                }
                ptr = ptr.next
            }
            return this
        }
    }

    display() {
        if (!this.head) return this
        else {
            let ptr = this.head
            let count = 1
            console.log(`${count}. ${ptr.value}`)
            while (ptr.next) {
                count++
                console.log(`${count}. ${ptr.next.value}`)
                ptr = ptr.next
            }
        }
        return this
    }

    findMax() {
        if (!this.head) return null
        else {
            let ptr = this.head
            let max
            while (ptr.next) {
                if (typeof(ptr.value) === 'number') {
                    if(max && ptr.value > max) max = ptr.value
                    else max = ptr.value
                }
                ptr = ptr.next
            }
            if (max) return max
            return null
        }
    }

    findMin() {
        if (!this.head) return null
        else {
            let ptr = this.head
            let min
            while (ptr.next) {
                if (typeof(ptr.value) === 'number') {
                    if(min && ptr.value < min) min = ptr.value
                    else min = ptr.value
                }
                ptr = ptr.next
            }
            if (min) return min
            return null
        }
    }
    
    toArray() {
        if (!this.head) return []
        else {
            let arr = []
            let ptr = this.head
            arr.push(ptr.value)
            while (ptr.next) {
                arr.push(ptr.next.value)
                ptr = ptr.next
            }
            return arr
        }
    }
}