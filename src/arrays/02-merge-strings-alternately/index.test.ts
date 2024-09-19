import { mergeAlternately } from "./index";

describe("mergeAlternately", () => {
  it("merges two strings of equal length", () => {
    expect(mergeAlternately("abc", "pqr")).toBe("apbqcr");
  });

  it("merges two strings where the first is shorter", () => {
    expect(mergeAlternately("ab", "pqrs")).toBe("apbqrs");
  });

  it("merges two strings where the second is shorter", () => {
    expect(mergeAlternately("abcd", "pq")).toBe("apbqcd");
  });

  it("handles empty strings", () => {
    expect(mergeAlternately("", "pqr")).toBe("pqr");
    expect(mergeAlternately("abc", "")).toBe("abc");
    expect(mergeAlternately("", "")).toBe("");
  });

  it("handles strings with special characters", () => {
    expect(mergeAlternately("a!c", "b@d")).toBe("ab!@cd");
  });

  it("handles strings with numbers", () => {
    expect(mergeAlternately("12", "ab")).toBe("1a2b");
  });
});
