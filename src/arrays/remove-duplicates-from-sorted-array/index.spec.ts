import { removeDuplicates } from "./index";

describe("removeDuplicates", () => {
  it("should remove duplicates from a sorted array", () => {
    const nums = [1, 1, 2];
    const expectedNums = [1, 2];

    const k = removeDuplicates(nums);

    expect(k).toBe(expectedNums.length);
    expect(nums.slice(0, k)).toEqual(expectedNums);
  });

  it("should handle arrays with no duplicates", () => {
    const nums = [1, 2, 3];
    const expectedNums = [1, 2, 3];

    const k = removeDuplicates(nums);

    expect(k).toBe(expectedNums.length);
    expect(nums.slice(0, k)).toEqual(expectedNums);
  });

  it("should handle empty arrays", () => {
    const nums: number[] = [];
    const expectedNums: number[] = [];

    const k = removeDuplicates(nums);

    expect(k).toBe(0);
    expect(nums.slice(0, k)).toEqual(expectedNums);
  });

  it("should handle arrays with all duplicates", () => {
    const nums = [1, 1, 1, 1];
    const expectedNums = [1];

    const k = removeDuplicates(nums);

    expect(k).toBe(1);
    expect(nums.slice(0, k)).toEqual(expectedNums);
  });

  it("should handle arrays with multiple duplicates", () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const expectedNums = [0, 1, 2, 3, 4];

    const k = removeDuplicates(nums);

    expect(k).toBe(expectedNums.length);
    expect(nums.slice(0, k)).toEqual(expectedNums);
  });

  it("should handle larger arrays", () => {
    const nums = Array.from({ length: 1000 }, () => 1);
    const expectedNums = [1];

    const k = removeDuplicates(nums);

    expect(k).toBe(1);
    expect(nums.slice(0, k)).toEqual(expectedNums);
  });

  it("should handle arrays with negative numbers", () => {
    const nums = [-3, -3, -2, -1, -1, 0, 0, 1, 1];
    const expectedNums = [-3, -2, -1, 0, 1];

    const k = removeDuplicates(nums);

    expect(k).toBe(expectedNums.length);
    expect(nums.slice(0, k)).toEqual(expectedNums);
  });

  it("should not modify elements beyond the new length", () => {
    const nums = [1, 1, 2, 2, 3, 3];
    const expectedNums = [1, 2, 3];

    const k = removeDuplicates(nums);

    expect(k).toBe(expectedNums.length);
    expect(nums.slice(0, k)).toEqual(expectedNums);

    // Ensure elements beyond the new length are not considered
    expect(nums.slice(k)).not.toContain(expectedNums);
  });
});
