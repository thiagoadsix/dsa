# Leetcode 26 - Remove Duplicates from Sorted Array

## Problem Description

Given an integer array nums sorted in **non-decreasing order**, remove the duplicates **in-place** such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in `nums`.

Consider the number of unique elements of nums to be `k`. To get accepted, you need to do the following:

- Change the array nums such that the first `k` elements of nums contain the unique elements in the order they were present in `nums` initially.
- Return `k`.

It does not matter what you leave beyond the first `k` elements.

### Example:

Example 1:

- **Input**: `nums = [1,1,2]`
- **Output**: `2, nums = [1,2,_]`
- **Explanation**: Your function should return `k = 2`, with the first two elements of nums being `1 and 2` respectively. It does not matter what you leave beyond the returned `k` (hence they are underscores).

Example 2:

- **Input**: `nums = [0,0,1,1,1,2,2,3,3,4]`
- **Output**: `5, nums = [0,1,2,3,4,_,_,_,_,_]`
- **Explanation**: Your function should return `k = 5`, with the first five elements of nums being `0, 1, 2, 3, and 4` respectively. It does not matter what you leave beyond the returned `k` (hence they are underscores).

## Approach

To solve this problem, we need to remove duplicates from the sorted array **in-place** and return the number of unique elements `k`. Since the array is sorted, any duplicates will be adjacent to each other.

### Steps:

1. Initialize a variable `k` to `0`. This variable will track the position to place the next unique element.
2. Iterate through the array using an index i from `0` to `n - 1`:
   - If it’s the first element (`i == 0`) or the current element `nums[i]` is different from the previous element `nums[i - 1]`:
     - Assign `nums[k] = nums[i]`.
     - Increment `k` by **1**.
3. Return `k` after the loop ends. This represents the number of unique elements.

## Pseudo-code

```
function removeDuplicates(nums):
    n = length of nums
    k = 0

    for index from 0 to n - 1:
        if index == 0 or nums[index] != nums[index - 1]:
            nums[k] = nums[index]
            k += 1

    return k
```

## Code Implementation

```ts
function removeDuplicates(nums: number[]): number {
  let n: number = nums.length;
  let k: number = 0;

  for (let index = 0; index < n; index++) {
    if (nums[index] !== nums[index - 1]) {
      nums[k] = nums[index];
      k += 1;
    }
  }

  return k;
}
```

## Time and Space Complexity

- **Time Complexity:** O(n)
  - We traverse the array once, performing constant-time operations at each step.
- **Space Complexity:** O(1)
  - We modify the array in place, using only a fixed amount of extra space.

## Conclusion

By leveraging the fact that the array is sorted, we can efficiently remove duplicates in-place by overwriting duplicate elements with the next unique element. This method maintains the relative order of the elements and operates with optimal time and space complexity.
