// 225. Implement Stack using Queues
var MyStack = function () {
  this.stack = [];
};

MyStack.prototype.push = function (x) {
  this.stack.push(x);
};

MyStack.prototype.pop = function () {
  return this.stack.pop(x);
};

MyStack.prototype.top = function () {
  return this.stack.at(-1);
};

MyStack.prototype.empty = function () {
  return this.stack.length === 0;
};

// var obj = new MyStack();
// let x = 2;
// obj.push(x);
// var param_2 = obj.pop();
// var param_3 = obj.top();
// var param_4 = obj.empty();

// 155. Min Stack
var MinStack = function () {
  this.stack = [];
};

MinStack.prototype.push = function (val) {
  const currMin = this.getMin();
  let minToPush = currMin === null ? val : Math.min(val, currMin);

  this.stack.push({
    val: val,
    currMin: minToPush,
  });
};

MinStack.prototype.pop = function () {
  const poppedItem = this.stack.pop();
  return poppedItem?.val;
};

MinStack.prototype.top = function () {
  if (this.stack.length === 0) {
    return null;
  }
  return this.stack.at(-1)["val"];
};

MinStack.prototype.getMin = function () {
  if (this.stack.length === 0) {
    return null;
  }
  return this.stack.at(-1)["currMin"];
};

// 232. Implement Queue using Stacks

var MyQueue = function () {
  this.stack = [];
};

MyQueue.prototype.push = function (x) {
  this.stack.push(x);
};

MyQueue.prototype.pop = function () {
  return this.stack.shift();
};

MyQueue.prototype.peek = function () {
  return this.stack.length > 0 ? this.stack[0] : null;
};

MyQueue.prototype.empty = function () {
  return this.stack.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
var obj = new MyQueue();

obj.push(1);
obj.push(2);
console.log("peek");
console.log(obj.peek());
console.log(obj.empty());
