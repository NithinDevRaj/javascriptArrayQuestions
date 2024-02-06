class Queue {
  constructor() {
    this.items = {};
    this.index = 0;
    this.secondIndex = 0;
  }
  enqueue(element) {
    this.items[this.index] = element;
    this.index++;
  }
  dequeue() {
    if (this.index.isEmpty()) return false;
    delete this.items[this.secondIndex];
    this.secondIndex++;
  }
  isEmpty() {
    return this.index - this.secondIndex === 0;
  }
  peek() {
    return this.items[this.secondIndex];
  }
  size() {
    return this.index - this.secondIndex;
  }
  print() {
    console.log(this.items);
  }
}
