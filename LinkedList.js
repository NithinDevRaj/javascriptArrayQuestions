class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }

  prepend(data) {
    const node = new Node(data);
    if (this.isEmpty()) this.head = node;
    else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  append(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) this.head = newNode;
    else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
      this.size++;
    }
  }
  insert(data, index) {
    if (index < 0 || index > this.size) return;
    if (index === 0) this.prepend(data);
    else {
      const newNode = new Node(data);
      const prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }

      newNode.next = prev.next;
      prev.next = newNode;
      this.size++;
    }
  }
  removeAt(index) {
    if (this.size === 0) return;
    if (index > this.size) return;
    if (index === 0) this.head = this.head.next;
    else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      prev.next = prev.next.next;
    }
    this.size--;
  }
  removeValue(value) {
    if (this.isEmpty()) return null;
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
    }
    let curr = this.head;
    while (curr.next && curr.next.value !== value) {
      curr = curr.next;
    }
    if (!curr.next) return null;
    else {
      curr.next = curr.next.next;
      this.size--;
    }
  }
  print() {
    if (this.isEmpty()) console.log("list is empty");
    else {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  search(value) {
    if (!this.head) return false;
    if (this.head.value === value) return value;

    const curr = this.head;
    index = 0;
    while (curr) {
      if (curr.value === value) return value;
      curr = curr.next;
      index++;
    }
    return "value not find";
  }
  reverse() {
    if (this.isEmpty()) return "List is empty";
    let curr = this.head;
    let prev = null;
    let next = null;
    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }
}

const NewList = new linkedList();
NewList.prepend("nithin");
NewList.print();
