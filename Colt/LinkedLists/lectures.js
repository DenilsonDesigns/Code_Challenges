// piece of data- val
// reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  printList() {
    let node = this.head;
    while (node) {
      console.log(node);
      node = node.next;
    }

    console.log(`Length of list: ${this.length}`);
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val) {
    // add node to the beginned of the list;
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return newNode;
    }

    let oldHead = this.head;
    this.head = newNode;
    newNode.next = oldHead;
    this.length++;
    return newNode;
  }
}

let list = new SinglyLinkedList();
list.push("Hello");
list.push("Goodbye");
list.push("See you later");
list.unshift("asdf");
list.push("See you later12313");
list.unshift("asdfasf");

// list.shift();
// list.shift();

list.printList();
