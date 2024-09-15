import { findClosestNumber } from "./index";

describe("findClosestNumber", () => {
  it("should return the closest number to zero", () => {
    expect(findClosestNumber([-4, -2, 1, 4, 8])).toBe(1);
    expect(findClosestNumber([2, -1, 1])).toBe(1);
    expect(findClosestNumber([-2, -1, -3])).toBe(-1);
    expect(findClosestNumber([0, -1, 1])).toBe(0);
    expect(findClosestNumber([-10000, 10000])).toBe(10000);
  });

  it("should handle single-element arrays", () => {
    expect(findClosestNumber([5])).toBe(5);
    expect(findClosestNumber([-5])).toBe(-5);
  });

  it("should handle large arrays", () => {
    const nums = [
      61488, 18221, -1321, 90249, -62158, 55128, -93476, 53905, 57644, 24630,
      89599, -95795, -14891, -60298, 17690, 99022, -24006, -89156, 80135,
      -46303, 18812, 59924, 32024, 82924, -47519, -77086, 1763, 68618, 53629,
      -56957, 95485, 99630, -7977, 31164, 94481, -80239, -57749, -3319, -58231,
      -94841, -19292, 33200, -31446, -3528, 2229, 74241, -19992, -91852, -28073,
      31453, -74484, 35491, 38870, -9499, 39838, 87369, 21123, -38616, -89277,
      -14541, -81586, -18569, -58242, -71216, 10816, 15086, -10519, 51080,
      53257, -4912, -37142, -16723, -69795, 54937, -24920, 68970, -10010,
      -81717, 36203, -67939, 73877, -58258, -57183, 36637, 91518, -8492, -57476,
      50523, 62462, 73152, -9511, -66761, 28333, -87163, 5187,
    ];
    expect(findClosestNumber(nums)).toBe(-1321);
  });

  it("should prefer the positive number when absolute values are equal", () => {
    expect(findClosestNumber([-2, 2])).toBe(2);
    expect(findClosestNumber([-3, 3, -3])).toBe(3);
  });
});
