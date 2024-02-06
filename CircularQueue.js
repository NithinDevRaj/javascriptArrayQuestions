class CircularQueue {
  constructor(capacit) {
    this.queue = new Array(capacit);
    this.capacity = capacit;
    this.currentLength = 0;
    this.front = -1;
    this.rear = -1;
  }
  isFull() {
    return this.currentLength === this.capacity;
  }
  isEmpty() {
    return this.currentLength === 0;
  }
  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.queue[this.rear] = element;
      this.currentLength += 1;
      if (this.front === -1) this.front = this.rear;
    }
  }
  dequeue() {
    if (this.isEmpty()) "Queue is empty";
    else {
      const item = this.queue[this.front];
      this.queue[this.front] = null;
      this.front = (this.front + 1) % this.capacity;
      this.currentLength -= 1;
      if (this.isEmpty()) {
        this.front = -1;
        this.rear = -1;
      }
      return item;
    }
  }
  peek() {
    if (!this.isEmpty()) return this.queue[this.front];
    return null;
  }
  print() {
    if (this.isEmpty()) return null;
    else {
      let i;
      let string = "";
      for (i = this.front; i !== this.rear; (i + 1) % this.capacity) {
        string += this.queue[i] + "->";
      }
      string += this.queue[i];
      console.log(string);
    }
  }
}
