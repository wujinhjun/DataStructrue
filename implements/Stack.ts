class ListNode<T> {
  val: T;
  prev: ListNode<T> | null;

  constructor(val: T, prev?: ListNode<T> | null) {
    this.val = val;
    this.prev = prev ?? null;
  }
}

interface IStack<T> {
  top: ListNode<T> | null;
  _size: number;
  push(element: T): void;
  pop(): T;
  peek(): T;
  isEmpty(): boolean;
  size(): number;
  [Symbol.iterator](): Iterator<T>;
}

export default class Stack<T> implements IStack<T> {
  top: ListNode<T> | null;
  _size: number;

  constructor() {
    this.top = null;
    this._size = 0;
  }

  push(element: T): void {
    const temp = new ListNode(element, this.top);
    this.top = temp;
    this._size++;
  }

  pop(): T {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }

    const value = this.top!.val;
    this.top = this.top!.prev;
    this._size--;

    return value;
  }

  peek(): T {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }

    return this.top!.val;
  }

  isEmpty(): boolean {
    return this._size === 0;
  }

  size(): number {
    return this._size;
  }

  [Symbol.iterator](): Iterator<T> {
    let current = this.top;
    return {
      next(): IteratorResult<T> {
        if (current) {
          const result = { value: current!.val, done: false };
          current = current!.prev;
          return result;
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  }
}
