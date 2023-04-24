import { describe, expect } from "@jest/globals";
import Stack from "../Stack";

describe("test Stack", () => {
  it("test push", () => {
    const st = new Stack();
    for (let i = 0; i < 10; i++) {
      st.push(i);
    }

    expect(st.peek()).toBe(9);
    expect(st.isEmpty()).toBe(false);
    expect(st.size()).toBe(10);
  });

  it("test pop", () => {
    const st = new Stack();
    for (let i = 0; i < 10; i++) {
      st.push(i);
    }

    for (let i = 0; i < 10; i++) {
      expect(st.pop()).toBe(10 - i - 1);
    }
    expect(st.size()).toBe(0);

    expect(() => st.pop()).toThrow("Stack is empty");
    expect(() => st.peek()).toThrow("Stack is empty");
  });
});