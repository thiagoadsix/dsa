export function removeDuplicates(nums: number[]): number {
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
