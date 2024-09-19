# Leetcode 121 - Best Time to Buy and Sell Stock

## Problem Description

You are given an array prices where `prices[i]` is the price of a given stock on the `i-th` day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return **the maximum profit you can achieve from this transaction**. If you cannot achieve any profit, return 0.

### Example:

- **Input**: `prices = [7, 1, 5, 3, 6, 4]`
- **Output**: `5`
- **Explanation**: `Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5.`

## Approach

### Steps:

1. **Initialize Variables**:

- `minPrice`: Set to `Infinity` or get the first element from the `prices` array to represent the minimum price encountered so far.
- `maxProfit`: Set to 0 to represent the maximum profit achieved so far.

2. Iterate Through Prices:

- For each price `prices[i]`:
- **Update** `minPrice`:
  - If `prices[i]` is less than `minPrice`, set `minPrice = prices[i]`.
- **Calculate Potential Profit**:
  - Compute `prices[i] - minPrice`.
  - If this value is greater than `maxProfit`, update `maxProfit = prices[i] - minPrice`.

3. **Return** `maxProfit`:

- After iterating through all prices, return the `maxProfit`.

### Explanation:

- **Objective**: Find the maximum difference between a later selling price and an earlier buying price.
- **Key Idea**: By keeping track of the lowest buying price (`minPrice`), we can calculate the potential profit at each day and update `maxProfit` accordingly.
- **One-Pass Solution**: This method only requires a single pass through the array, resulting in efficient time complexity.

## Pseudocode

```
function maxProfit(prices):
    minPrice = Infinity // or prices[0]
    maxProfit = 0

    for i from 0 to prices.length - 1:
        if prices[i] < minPrice:
            minPrice = prices[i]
        else if prices[i] - minPrice > maxProfit:
            maxProfit = prices[i] - minPrice

    return maxProfit
```

## Code Implementation

```ts
export function maxProfit(prices: number[]): number {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }

  return maxProfit;
}
```

## Time and Space Complexity

- **Time Complexity:** O(n)
  - We traverse the prices array once, performing constant-time operations at each step.
- **Space Complexity:** O(1)
  - Only two variables (`minPrice` and `maxProfit`) are used, regardless of input size.

## Conclusion

By iterating through the prices and updating the minimum buying price and maximum profit on the fly, we efficiently find the optimal buy-sell combination for maximum profit. This approach ensures we consider all possible profits in a single pass, leading to an optimal solution in terms of both time and space complexity.
