
// Analogy: Scavenger hunt
// data: message given at each location in the hunt
// next: pointer to next location in hunt
// _length: number of locations in hunt
// head: starting position of hunt

function Node(value) {   // class instantiated via SinglyList .add method
    this.val = val;   // property that stores a value for each instance of Node
    this.next = null;   // property that points to next instance of Node
}

function SinglyList() { // class instantiated via 'var <List> = new SinglyList()'
    this._length = 0;   // property counts # of Nodes in list (0 at start)
    this.head = null;   // identifies start of list prior to first Node
    // since every new instance of SinglyList has no Node,
    // default value of head is null and _length is 0

    // create 'add' method; also use SinglyList.prototype.add (same as 'this')
    this.add = function(value) {    // later called via '<List>.add("value")'

        // if start of list is null (no Node), create Node there
        if (this.head == null) {      // also said as '!this.head'
            this.head = new Node(value);    // instantiate Node with given value
            this._length++;     // since Node added, increment counter
            return this
        }

        // create pointer to track position of current Node
        var pointer = this.head;    // create pointer at start of list

        // else, instantiate while to move pointer where .next of last Node is null
        // Remember: .next is established as property most recent instance of Node class
        while (pointer.next != null) {
            pointer = pointer.next; // move pointer along <List> until .next is null
        }
        pointer.next = new Node(value); // instantiate Node with given value
        this._length++;     // since Node added, increment counter
        return this;
    }

    // Max method
    this.max = function(){
        if (!this.head){
            return null;
        }
        var max = this.head.val;
        var runner = this.head;
        while (runner){
            if (runner.val > max){
                max = runner.val;
            }
            runner = runner.next;
        }
        return max;
    }

    // Remove Front method
    this.removeFront(){
        if (!this.head){
            return this;
        }
        if (this.head.next != null){
            this.head = this.head.next;
            return this;
        }
    }
}

var listy = new SinglyList();
listy.add(1).add(2).add(3);
console.log(listy);
console.log(listy.max());


// Next: Learn it in Python
// Look at memory location provided