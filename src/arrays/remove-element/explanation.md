# Leetcode 27 - Remove Element

## Problem Description

Given an integer array `nums` and an integer `val`, remove all occurrences of val in nums **in-place**. The order of the elements may be changed. Then return the number of elements in nums which are not equal to `val`.

Consider the number of elements in `nums` which are not equal to `val` to be `k`, to get accepted, you need to do the following things:

- Change the array `nums` such that the first `k` elements of `nums` contain the elements which are not equal to `val`.
- The remaining elements of `nums` are not important as well as the size of `nums`.
- Return `k`.

### Example:

Example 1:

- **Input**: `nums = [3,2,2,3], val = 3`
- **Output**: `2, nums = [2,2,_,_]`
- **Explanation**: Your function should return `k = 2`, with the first two elements of `nums` being `2`. It does not matter what you leave beyond the returned `k` (hence they are underscores).

Example 2:

- **Input**: `nums = [0,1,2,2,3,0,4,2], val = 2`
- **Output**: `5, nums = [0,1,4,0,3,_,_,_]`
- **Explanation**: Your function should return `k = 5`, with the first five elements of `nums` containing `0, 1, 4, 0, and 3`. Note that the order of these five elements can be arbitrary. It does not matter what you leave beyond the returned `k` (hence they are underscores).

## Approach

To solve this problem, we need to remove all occurrences of val from the array `nums` in-place and return the number of elements not equal to val (`k`). The order of the elements may be changed, so we can overwrite elements in any order.

### Steps:

1. Initialize two pointers:

- `i` (index) starting at `0`.
- `n` representing the length of the array `nums`.

2. Loop while i < n:

- If `nums[i]` equals `val`:
  - Replace `nums[i]` with `nums[n - 1]` (move the last element to the current position).
  - Decrease `n by 1` (reduce the effective array size).
- Else:
  - Increase `i by 1` (move to the next element).

3. Return `n` as the new length of the array without the `val` elements.

**Note**: Since the order of elements can be changed, we can replace the element to remove with the last element and reduce the array size.

## Pseudo-code

```
function removeElement(nums, val):
    n = length of nums
    i = 0

    while i < n:
        if nums[i] == val:
            nums[i] = nums[n - 1]
            n -= 1
        else:
            i += 1

    return n
```

## Code Implementation

```ts
function removeElement(nums: number[], val: number): number {
  let n: number = nums.length;
  let i: number = 0;

  while (i < n) {
    if (nums[i] === val) {
      nums[i] = nums[n - 1];
      n -= 1;
    } else {
      i += 1;
    }
  }

  return n;
}
```

## Time and Space Complexity

- **Time Complexity:** O(n)
  - We traverse the array once, and each operation inside the loop is constant time.
- **Space Complexity:** O(1)
  - We modify the array in place, using only a fixed amount of extra space.

## Conclusion

By using a two-pointer approach and taking advantage of the fact that the order of elements may be changed, we can efficiently remove all occurrences of val from the array nums in-place. The method operates with optimal time and space complexity.
