// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let size = 0;
    let node = this.head;
    while (node) {
      size++;
      node = node.next;
    }
    return size;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let r = null;
    let node = this.head;
    while (node) {
      r = node;
      node = node.next;
    }
    return r;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    let node = this.head;
    this.head = node.next;
  }

  removeLast() {
    // if (this.size() <= 1) {
    //   return (this.head = null);
    // }
    // let node = this.head;

    // for (let i = 0; i < this.size(); i++) {
    //   if (i === this.size() - 2) {
    //     return (node.next = null);
    //   }
    //   node = node.next;
    // }

    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      return (this.head = null);
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast();
    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }

    return null;
  }

  removeAt(index) {
    // if (!this.head) {
    //   return;
    // }
    // if (index >= this.size()) {
    //   return;
    // }

    // let node = this.head;
    // let next = node.next;
    // let counter = 0;
    // while (node) {
    //   if (index === counter) {
    //     return (this.head = next);
    //   }
    //   node = node.next;
    //   counter++;
    // }

    /**
     *  Grider's solution
     */
    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
    }
    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    // if (index === 0) {
    //   let next = this.head;
    //   this.head = new Node(data);
    //   this.head.next = next;
    //   return;
    // }

    // if (index > this.size()) {
    //   let current = this.getAt(this.size() - 1);
    //   current.next = new Node(data);
    //   return;
    // }

    // let current = this.getAt(index - 1);
    // let forward = this.getAt(index);
    // let node = new Node(data);
    // current.next = node;
    // node.next = forward;

    /**
     * Grider's solution
     */
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }
}

const l = new LinkedList();

module.exports = { Node, LinkedList };
