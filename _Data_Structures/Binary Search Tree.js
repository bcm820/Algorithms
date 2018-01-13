
function Node(val){
    this.val = val;
    this.left = null;
    this.right = null;
}

function BST(){
    this.root = null;
    this.add = function(val) {
        if(!this.root){ this.root = new Node(val); }
        let ptr = this.root;
        let insert = (node, val) => {
            if(val < node.val && !node.left){ node.left = new Node(val); }
            else if(val >= node.val && !node.right){ node.right = new Node(val); }
            else if(val < node.val){ insert(node.left, val); }
            else { insert(node.right, val); }
        };
        insert(ptr, val);
        return this;
    }
    this.size = () => {
        if(!this.root){ return 0; }
        let ptr = this.root;
        let size = 1;
        let count = (node) => {
            if(!node.left && !node.right){ return; }
            if(node.left){ size++; count(node.left); }
            if(node.right){ size++; count(node.right); }
        count(ptr);
        return size;
        }
    }
    this.height = () => {
        if(!this.root){ return 0; }
        let size = this.size();
        let ptr = this.root;
        let height = 1;
        let count = 1;
        let measure = (node, length, size, count) => {
            if(count === size){ return; }
            let temp = length;
            if(node.left || node.right){
                temp++;
                if(height < temp){ height = temp; }
            }
            if(node.left){
                count++;
                measure(node.left, temp);
            }
            if(node.right){
                count++;
                measure(node.right, temp);
            }
        measure(ptr, height);
        return height;
        }
    }
    this.preOrder = 
}