class Queue {
  constructor(items) {
    // initialize elements using javascript array.
    this.items = items || [];
  }
//
  enQueue(element) {
    // this implementation will enqueue at the "front"
    // of the data structure, ie, will insert at index 0
    // and push the rest of the elements back.
    this.items.unshift(element);
  }

  deQueue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.pop();
  }

  next() {
    // returns the next element that will be popped off
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  hasElementWithCoords(x, y) {
    return this.items.some((item) => item.x === x && item.y === y);
  }

  getHead() {
    return this.items[0];
  }

  print() {
    console.log(this.items);
  }
}

export default Queue;
