// one way

const stack = [];
stack.push(1);
stack.push(2);
stack.push(3);

stack.pop();

// we can also use unshift and shift as well. but timecomplexity is not good

// stack from scratch
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}




