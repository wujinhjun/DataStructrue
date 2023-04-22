class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number, next?: ListNode | null) {
    this.val = val;
    this.next = next ?? null;
  }
}

interface ILinkedList {
  insert(index: number, val: number): void;
  insertFirst(val: number): void;
  insertLast(val: number): void;
  remove(loc: number): void;
  removeFirst(): void;
  removeFirst(): void;
  get(loc: number): number;
  getFirst(): number;
  getLast(): number;
  size(): number;
  toString(): string;
  setNode(index: number, val: number): void;
}

export default class MyLinkedList implements ILinkedList {
  _head: ListNode;
  _length: number;

  constructor() {
    this._head = new ListNode(Number.MAX_SAFE_INTEGER);
    this._length = 0;
  }

  insert(loc: number, val: number) {
    let pointer = this._findNode(loc);

    const last = pointer.next;
    pointer.next = new ListNode(val, last);
    this._length++;
  }

  insertFirst(val: number) {
    this.insert(0, val);
  }

  insertLast(val: number) {
    this.insert(this._length, val);
  }

  remove(loc: number) {
    let pointer = this._findNode(loc);

    const last = pointer.next?.next!;
    pointer.next = last;
    this._length--;
  }

  removeFirst() {
    this.remove(0);
  }

  removeLast() {
    this.remove(this._length);
  }

  get(loc: number): number {
    let pointer = this._findNode(loc);

    const last = pointer.next;

    return last?.val!;
  }

  getFirst(): number {
    return this.get(0);
  }

  getLast(): number {
    return this.get(this._length - 1);
  }

  size(): number {
    return this._length;
  }

  toString(): string {
    const res: number[] = [];

    for (let i = 0; i < this._length; i++) {
      res.push(this.get(i));
    }

    return res.join("->");
  }

  setNode(index: number, val: number) {
    const node = this._findNode(index);
    node.val = val;
  }

  _findNode(loc: number): ListNode {
    if (loc > this._length) {
      throw new Error(`The linked list is out of bounds`);
    }

    let pointer = this._head;
    let pos = 0;

    while (pointer && pos <= loc - 1) {
      pointer = pointer.next!;
      pos++;
    }

    return pointer;
  }
}
