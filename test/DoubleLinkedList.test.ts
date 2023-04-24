import { describe, expect } from "@jest/globals";
import DoubleLinkedList from "../implements/DoubleLinkedList";

describe("test my DoubleLinkedList", () => {
  it("insert head", () => {
    const dll = new DoubleLinkedList();
    for (let i = 10; i >= 5; i--) {
      dll.insertFirst(i);
    }
    const expected = "5->6->7->8->9->10";
    expect(dll.toString()).toBe(expected);
  });

  it("remove head", () => {
    const dll = new DoubleLinkedList();
    expect(dll.removeFirst()).toBe(-1);
    for (let i = 10; i >= 5; i--) {
      dll.insertFirst(i);
    }
    expect(dll.removeFirst()).toBe(5);
    const expected = "6->7->8->9->10";
    expect(dll.toString()).toBe(expected);
  });

  it("insert tail", () => {
    const dll = new DoubleLinkedList();
    for (let i = 10; i >= 5; i--) {
      dll.insertLast(i);
    }
    const expected = "10->9->8->7->6->5";
    expect(dll.toString()).toBe(expected);
  });

  it("remove tail", () => {
    const dll = new DoubleLinkedList();
    expect(dll.removeLast()).toBe(-1);
    for (let i = 10; i >= 5; i--) {
      dll.insertLast(i);
    }
    expect(dll.removeLast()).toBe(5);
    const expected = "10->9->8->7->6";
    expect(dll.toString()).toBe(expected);
  });

  it("change current value", () => {
    const dll = new DoubleLinkedList();
    for (let i = 10; i >= 5; i--) {
      dll.insertLast(i);
    }
    dll.setNode(0, 15);
    const expected = "15->9->8->7->6->5";
    expect(dll.toString()).toBe(expected);
  });

  it("test size", () => {
    const dll = new DoubleLinkedList();
    for (let i = 10; i >= 0; i--) {
      dll.insertLast(i);
    }

    expect(dll.size()).toBe(11);
  });

  it("test out of bounds", () => {
    const dll = new DoubleLinkedList();
    const index = 1;
    expect(() => dll.get(index)).toThrow(`The index: ${index} out of bounds`);
  });
});
