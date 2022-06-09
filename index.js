class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value) {
        const newNode = new Node(value) 
        //stack empty
        if(this.first == null ) {
            this.first = newNode;
            this.last = newNode;
        } else {
            //creating a temporary new node to reference later
            const temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }

        return ++this.size;
    }

    pop() {
        if(this.size == 0) return null;
        // we pop the first item on our stack which is the last item we add to it (LIFO)
        const temp = this.first;

        //edge case incase there's a single value on the stack
        if(this.size == this.last) {
            this.last = null;
        }

        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

const newStack = new Stack();
newStack.push("Hello");
newStack.push("okay");
newStack.push("Alexander");
newStack.push("Gauiss");
newStack.push("Ceasar");
newStack.push("Lu bu");
newStack.push("I see you");
newStack.pop();
console.log(newStack)
