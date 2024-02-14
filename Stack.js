class Stack {
  constructor() {
    this.items = [];
  }
  push(value) {
    this.items.push(value);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  print() {
    let list = "";
    let newStack = this.items.reverse();
    for (let i = 0; i < newStack.length; i++) {
      list += newStack[i];
    }
    this.items = this.items.reverse();
  }
}

