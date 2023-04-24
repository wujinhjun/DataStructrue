import { describe, expect } from "@jest/globals";
import MyLinkedList from "../implements/LinkedList";

describe("test MyLinkedList", () => {
  it("add head", () => {
    const mll = new MyLinkedList();
    for (let i = 10; i >= 0; i--) {
      mll.insertFirst(i);
    }

    const expected = "0->1->2->3->4->5->6->7->8->9->10";
    expect(mll.toString()).toBe(expected);
  });

  it("add tail", () => {
    const mll = new MyLinkedList();
    for (let i = 0; i <= 10; i++) {
      mll.insertLast(i);
    }

    const expected = "0->1->2->3->4->5->6->7->8->9->10";
    expect(mll.toString()).toBe(expected);
  });

  it("add index", () => {
    const mll = new MyLinkedList();
    for (let i = 0; i <= 10; i++) {
      mll.insert(i, 10 - i);
    }

    const expected = "10->9->8->7->6->5->4->3->2->1->0";
    expect(mll.toString()).toBe(expected);
  });

  it("random insert", () => {
    const mll = new MyLinkedList();
    for (let i = 10; i >= 0; i--) {
      mll.insertFirst(i);
    }

    for (let i = 0; i <= 3; i++) {
      mll.insert(i, (i + 4) ** 2);
    }

    const expected = "16->25->36->49->0->1->2->3->4->5->6->7->8->9->10";
    expect(mll.toString()).toBe(expected);
  });

  it("remove last", () => {
    const mll = new MyLinkedList();
    for (let i = 10; i >= 0; i--) {
      mll.insertFirst(i);
    }

    for (let i = 0; i <= 3; i++) {
      mll.removeFirst();
    }

    const expected = "4->5->6->7->8->9->10";
    expect(mll.toString()).toBe(expected);
  });

  it("remove tail", () => {
    const mll = new MyLinkedList();
    for (let i = 10; i >= 0; i--) {
      mll.insertFirst(i);
    }
    for (let i = 0; i <= 3; i++) {
      mll.insert(i, (i + 4) ** 2);
    }

    for (let i = 0; i <= 3; i++) {
      mll.removeLast();
    }

    const expected = "16->25->36->49->0->1->2->3->4->5->6";
    expect(mll.toString()).toBe(expected);
  });

  it("get", () => {
    const mll = new MyLinkedList();
    for (let i = 10; i >= 0; i--) {
      mll.insertFirst(i);
    }

    expect(mll.getFirst()).toBe(0);
    expect(mll.getLast()).toBe(10);
    expect(mll.size()).toBe(11);
    mll.setNode(mll.size(), 15);
    expect(mll.getLast()).toBe(15);
  });

  it("out of bounds", () => {
    const mll = new MyLinkedList();
    mll.insertLast(10);
    expect(() => mll.get(10)).toThrow(`The linked list is out of bounds`);
  });

  it("test iterator", () => {
    const mll = new MyLinkedList();
    for (let i = 10; i >= 0; i--) {
      mll.insertFirst(i);
    }

    let index = 0;
    for (const m of mll) {
      expect(m).toBe(index);
      index++;
    }
  });
});
