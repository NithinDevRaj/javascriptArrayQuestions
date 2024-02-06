class queue {
  constructor() {
    this.list = [];
  }
  enqueue(element) {
    this.list.push(element);
  }
  deque() {
    return this.list.shift();
  }
  isEmpty() {
    return this.list.length === 0;
  }
  peek() {
    if (this.isEmpty()) throw new Error("Queue is empty");
    return this.list[0];
  }
  size() {
    return this.list.length;
  }
  print() {
    console.log(this.list.toString());
  }
}
