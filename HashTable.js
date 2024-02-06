class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) total += key.charCodeAt(i);

    return total % this.size;
  }
  set(key, value) {
    let index = this.hash(key);
    // this.table[index] = value;
    const bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const bucketExist = bucket.find((item) => item[0] === key);
      if (!bucketExist) {
        bucket.push([key, value]);
      } else {
        bucketExist[1] = value;
      }
    }
  }
  get(key) {
    let index = this.hash(key);
    // return this.table[index];
    const bucket = this.table[index];
    if (bucket) {
      const value = bucket.find((find) => find[0] === key);
      if (value) {
        return value[1];
      }
    }
    return undefined;
  }
  remove(key) {
    const index = this.hash(key);
    // this.table[index] = undefined;
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((val) => val[0] === key);
      if (sameKeyItem) {
        bucket.slice(bucket.indexOf(sameKeyItem), 1);
      }
    }
  }
  display() {
    for (let i = 0; i < this.size; i++) {
      if (this.table[i]) {
        console.log(this.table[i]);
      }
    }
  }
}
