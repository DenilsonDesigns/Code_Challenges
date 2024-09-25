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

var obj = new MyStack();
let x = 2;
obj.push(x);
var param_2 = obj.pop();
var param_3 = obj.top();
var param_4 = obj.empty();
