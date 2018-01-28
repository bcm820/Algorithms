
class Stack {
    constructor() {
        this.data = []
        this.top = null
    }
    push(item) {
        this.data.push(item)
        this.top = item
        return this
    }
    pop() {
        const top = this.data.pop()
        this.top = this.data[this.data.length-1]
        return top
    }
    display() {
        for (let i = this.data.length - 1; i >= 0; i--) {
            console.log(`${i+1}. ${this.data[i]}`)
        }
    }
}

class Queue {
    constructor() {
        this.data = []
        this.front = null
    }
    enqueue(item) {
        this.data.push(item)
        if(!this.front) this.front = item
        return this
    }
    dequeue() {
        let front = this.data.shift()
        this.front = this.data[0]
        return front
    }
    display() {
        for (let i = 0; i < this.data.length; i++) {
            console.log(`${i+1}. ${this.data[i]}`)
        }
    }
}

var queue = new Queue();
queue.enqueue("Bird");
queue.enqueue("Magic");
queue.enqueue("Jordan");
queue.enqueue("Kobe");
queue.enqueue("Shaq");
queue.display();
console.log("You can stop waiting Bird");
queue.dequeue();
queue.display();

/*
  Queue.prototype.enqueue = function(item) {
    this.dataStore[this.back] = item;
    this.back++;
  }
  Queue.prototype.dequeue = function() {
    var output = this.dataStore[0];
    for(var i = 1; i < this.back; i++) {
      this.dataStore[i - 1] = this.dataStore[i];
    }
    this.back--;
    return output;
  }
  Queue.prototype.display = function() {
    for(var i = 0; i < this.back; i++) {
      console.log(this.dataStore[i]);
    }
  }
*/