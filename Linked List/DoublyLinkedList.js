class NewNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = new NewNode(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newValue = new NewNode(value);
        this.tail.next = newValue;
        newValue.previous = this.tail;
        this.tail = newValue;
        this.length++;
    }

    prepend(value) {
        const newValue = new NewNode(value);
        newValue.next = this.head;
        this.head.previous = newValue;
        this.head = newValue;
        this.length++;
    }

    insert(value, index) {
        const newNode = new NewNode(value);
        let previousNode = this.traverse(index - 1);
        let rightNode = previousNode.next;
        previousNode.next = newNode;
        newNode.previous = previousNode;
        newNode.next = rightNode;
        rightNode.previous = newNode;
        this.length++;
    }

    remove(index) {
        let leftNode = this.traverse(index - 1);
        let unwantedNode = leftNode.next;
        let rightNode = unwantedNode.next;
        leftNode.next = rightNode;
        rightNode.previous = leftNode;
        this.length--;
    }

    traverse(index) {
        let currentIndex = 0;
        let currentNode = this.head;
        while (currentIndex !== index) {
            currentIndex++;
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array;
    }

}

let doublyLinkedList = new DoublyLinkedList(1);
doublyLinkedList.append(2);
doublyLinkedList.append(3);
console.log(doublyLinkedList.printList());
doublyLinkedList.insert(99, 1);
console.log(doublyLinkedList.printList());
doublyLinkedList.remove(1);
console.log(doublyLinkedList.printList());
