class ListNode<T> {
  val: T;
  prev: ListNode<T> | null;
  next: ListNode<T> | null;

  constructor(val: T, prev?: ListNode<T> | null, next?: ListNode<T> | null) {
    this.val = val;
    this.prev = prev ?? null;
    this.next = next ?? null;
  }
}

interface IDoubleLinkedList<T> {
  sentinel: ListNode<T>;
  insert(index: number, val: T): void;
  insertFirst(val: T): void;
  insertLast(val: T): void;
  setNode(index: number, val: T): void;
  remove(index: number): number;
  removeFirst(): number;
  removeLast(): number;
  get(i: number): number;
  size(): number;
  toString(): string;
}

export default class DoubleLinkedList implements IDoubleLinkedList<number> {
  sentinel: ListNode<number>;
  private _length: number;

  constructor() {
    this.sentinel = new ListNode(0);
    this.sentinel.next = this.sentinel;
    this.sentinel.prev = this.sentinel;
    this._length = 0;
  }

  insert(index: number, val: number) {
    const node = this._findNode(index);
    const newNode = new ListNode(val);

    newNode.prev = node.prev;
    newNode.next = node;
    node.prev!.next = newNode;
    node.prev = newNode;
    this._length++;
  }

  insertFirst(val: number): void {
    const node = new ListNode(val);
    const oldFirst = this.sentinel.next!;

    node.next = oldFirst;
    node.prev = this.sentinel;

    oldFirst.prev = node;
    this.sentinel.next = node;
    this._length++;
  }

  insertLast(val: number): void {
    const node = new ListNode(val);
    const oldLast = this.sentinel.prev!;

    node.next = this.sentinel;
    node.prev = oldLast;

    oldLast.next = node;
    this.sentinel.prev = node;
    this._length++;
  }

  setNode(index: number, val: number): void {
    const node = this._findNode(index);
    node.val = val;
  }

  remove(index: number): number {
    const node = this._findNode(index);

    node.prev!.next = node.next;
    node.next!.prev = node.prev;
    this._length--;
    return node.val;
  }

  removeFirst(): number {
    if (this.sentinel.next === this.sentinel) {
      return -1;
    }

    const value = this.sentinel.next!.val;
    const oldSecond = this.sentinel.next?.next!;
    oldSecond.prev = this.sentinel;
    this.sentinel.next = oldSecond;
    this._length--;

    return value;
  }

  removeLast(): number {
    if (this.sentinel.prev === this.sentinel) {
      return -1;
    }

    const value = this.sentinel.prev!.val;
    const oldLast = this.sentinel.prev!.prev!;
    oldLast.next = this.sentinel;
    this.sentinel.prev = oldLast;
    this._length--;

    return value;
  }

  get(index: number): number {
    const node = this._findNode(index);
    return node.val;
  }

  size(): number {
    return this._length;
  }

  toString() {
    const res: number[] = [];

    for (let i = 0; i < this._length; i++) {
      res.push(this.get(i));
    }

    return res.join("->");
  }

  private _findNode(index: number) {
    if (index > this._length || index < 0) {
      throw new Error(`The index: ${index} out of bounds`);
    }

    let pos = 0;
    let pointer = this.sentinel;

    while (pointer && pos <= index) {
      pointer = pointer.next!;
      pos++;
    }

    return pointer;
  }
}

const mll = new DoubleLinkedList();
for (let i = 0; i < 10; i++) {
  mll.insertLast(i);
}
console.log(mll.toString());

for (let i = 5; i >= 0; i--) {
  mll.remove(i);
}

console.log(mll.toString());

for (let i = 3; i < 9; i++) {
  mll.insert(i, i * 4);
}

console.log(mll.toString());
