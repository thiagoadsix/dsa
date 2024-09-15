export function findClosestNumber(nums: number[]): number {
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
