import { removeElement } from "./index";

describe("removeElement", () => {
  it("should remove all occurrences of val (Example 1)", () => {
    const nums = [3, 2, 2, 3];
    const val = 3;
    const expectedNums = [2, 2];

    const k = removeElement(nums, val);

    expect(k).toBe(expectedNums.length);
    expect(nums.slice(0, k).sort()).toEqual(expectedNums.sort());
  });

  it("should remove all occurrences of val (Example 2)", () => {
    const nums = [0, 1, 2, 2, 3, 0, 4, 2];
    const val = 2;
    const expectedNums = [0, 1, 4, 0, 3];

    const k = removeElement(nums, val);

    expect(k).toBe(expectedNums.length);
    expect(nums.slice(0, k).sort()).toEqual(expectedNums.sort());
  });

  it("should handle empty array", () => {
    const nums: number[] = [];
    const val = 1;
    const expectedNums: number[] = [];

    const k = removeElement(nums, val);

    expect(k).toBe(0);
    expect(nums.slice(0, k)).toEqual(expectedNums);
  });

  it("should handle array with all elements equal to val", () => {
    const nums = [2, 2, 2, 2];
    const val = 2;
    const expectedNums: number[] = [];

    const k = removeElement(nums, val);

    expect(k).toBe(0);
    expect(nums.slice(0, k)).toEqual(expectedNums);
  });

  it("should handle array with no elements equal to val", () => {
    const nums = [1, 2, 3, 4];
    const val = 5;
    const expectedNums = [1, 2, 3, 4];

    const k = removeElement(nums, val);

    expect(k).toBe(expectedNums.length);
    expect(nums.slice(0, k).sort()).toEqual(expectedNums.sort());
  });

  it("should handle array with multiple occurrences of val scattered", () => {
    const nums = [4, 1, 2, 1, 3, 1, 0];
    const val = 1;
    const expectedNums = [4, 2, 3, 0];

    const k = removeElement(nums, val);

    expect(k).toBe(expectedNums.length);
    expect(nums.slice(0, k).sort()).toEqual(expectedNums.sort());
  });

  it("should handle array with negative numbers", () => {
    const nums = [-1, -2, 0, 1, 2, -2];
    const val = -2;
    const expectedNums = [-1, 0, 1, 2];

    const k = removeElement(nums, val);

    expect(k).toBe(expectedNums.length);
    expect(nums.slice(0, k).sort()).toEqual(expectedNums.sort());
  });

  it("should handle array where val is zero", () => {
    const nums = [0, 1, 0, 3, 0];
    const val = 0;
    const expectedNums = [1, 3];

    const k = removeElement(nums, val);

    expect(k).toBe(expectedNums.length);
    expect(nums.slice(0, k).sort()).toEqual(expectedNums.sort());
  });

  it("should handle array with single element equal to val", () => {
    const nums = [2];
    const val = 2;
    const expectedNums: number[] = [];

    const k = removeElement(nums, val);

    expect(k).toBe(0);
    expect(nums.slice(0, k)).toEqual(expectedNums);
  });

  it("should handle array with single element not equal to val", () => {
    const nums = [3];
    const val = 2;
    const expectedNums = [3];

    const k = removeElement(nums, val);

    expect(k).toBe(1);
    expect(nums.slice(0, k)).toEqual(expectedNums);
  });
});
