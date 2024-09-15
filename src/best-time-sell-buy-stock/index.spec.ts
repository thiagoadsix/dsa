import { maxProfit } from "./index";

describe("maxProfit", () => {
  it("should return the correct profit for increasing prices", () => {
    expect(maxProfit([1, 2, 3, 4, 5])).toBe(4);
  });

  it("should return 0 when prices are decreasing", () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });

  it("should return the correct profit for mixed prices", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
    expect(maxProfit([2, 4, 1])).toBe(2);
  });

  it("should handle prices with no profit opportunity", () => {
    expect(maxProfit([5, 5, 5, 5])).toBe(0);
  });

  it("should handle a single-day price", () => {
    expect(maxProfit([10])).toBe(0);
  });

  it("should handle an empty array", () => {
    expect(maxProfit([])).toBe(0);
  });

  it("should handle prices with large fluctuations", () => {
    expect(maxProfit([3, 8, 1, 9, 2, 10])).toBe(9);
  });

  it("should handle multiple profit opportunities but only one transaction allowed", () => {
    expect(maxProfit([1, 2, 3, 4, 5, 6])).toBe(5);
  });

  it("should handle negative prices gracefully", () => {
    // Although stock prices shouldn't be negative, test for robustness
    expect(maxProfit([-3, -2, -1, 0, 1, 2])).toBe(5);
  });

  it("should handle large input arrays efficiently", () => {
    const largeArray = Array.from({ length: 10000 }, (_, i) => i);
    expect(maxProfit(largeArray)).toBe(9999);
  });

  it("should return 0 when minPrice is at the end", () => {
    expect(maxProfit([5, 4, 3, 2, 1, 0])).toBe(0);
  });

  it("should return correct profit when max profit is at the end", () => {
    expect(maxProfit([1, 2, 3, 4, 5, 100])).toBe(99);
  });

  it("should return 0 for an array with identical elements", () => {
    expect(maxProfit([7, 7, 7, 7, 7])).toBe(0);
  });
});
