# Leetcode 2239 - Finding the Number Closest to Zero

## Problem Description

Given an array of integers `nums`, find the number that is closest to zero. If there are multiple answers, return the number with the largest value.

### Example:

- **Input:** `nums = [-4, -2, 1, 4, 8]`
- **Output:** `1`
- **Explanation:** The number closest to zero is `1`.

## Approach

To solve this problem, we need to find the number in the array that has the smallest absolute value (distance from zero). In case of a tie (two numbers with the same absolute value), we prefer the positive number.

### Steps:

1. Initialize a variable `closest` with the first element of the array. This serves as the initial candidate for the closest number to zero.
2. Iterate through each number `num` in the array:
   - Compare the absolute values of `num` and `closest`:
     - If `Math.abs(num) < Math.abs(closest)`, update `closest` to `num`.
     - If `Math.abs(num) === Math.abs(closest)`:
       - If `num` is positive and `closest` is negative, update `closest` to `num`.
3. Return `closest` after iterating through the entire array.

## Pseudo-code

```
function findClosestNumber(nums):
    closest = nums[0]

    for num in nums:
        if abs(num) < abs(closest):
            closest = num
        else if abs(num) == abs(closest) and num > closest:
            closest = num

    return closest
```

## Code Implementation

```ts
function findClosestNumber(nums: number[]): number {
  let closest: number = nums[0];

  for (const num of nums) {
    if (Math.abs(num) < Math.abs(closest)) {
      closest = num;
    } else if (Math.abs(num) === Math.abs(closest) && num > closest) {
      closest = num;
    }
  }

  return closest;
}
```

## Time and Space Complexity

- **Time Complexity:** O(n)
  - We iterate through the array once, performing constant-time operations for each element.
- **Space Complexity:** O(1)
  - We use a fixed amount of extra space regardless of the input size.

## Conclusion

By comparing the absolute values of the numbers in the array and updating the `closest` variable accordingly, we efficiently find the number closest to zero. The key is to handle the tie-breaker situation by preferring the positive number when two numbers are equally close to zero.
