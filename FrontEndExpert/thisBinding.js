Function.prototype.myCall = function (thisContext, ...args) {
  thisContext.func = this;
  thisContext.func(...args);
};

Function.prototype.myApply = function (thisContext, args = []) {
  // Write your code here.
};

Function.prototype.myBind = function (thisContext, ...args) {
  // Write your code here.
};
