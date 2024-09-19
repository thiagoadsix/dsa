# Leetcode 1768 - Merge Strings Alternately

## Problem Description

You are given two strings `word1` and `word2`. Merge the strings by adding letters in alternating order, starting with `word1`. If a string is longer than the other, append the additional letters onto the end of the merged string.

## Example

- **Input**: `word1 = "abc", word2 = "pqr"`
- **Output**: `"apbqcr"`

- **Explanation**: The merged string will be merged as so:
  - **word1**: a b c
  - **word2**: p q r
  - **merged**: a p b q c r

## Approach

We'll use a single loop to iterate through both strings simultaneously, adding characters from each string alternately to the result.

## Steps

1. Initialize an empty string to store the merged result.
2. Iterate through the characters of both strings using a single loop.
3. If there's a character at the current index in word1, add it to the result.
4. If there's a character at the current index in word2, add it to the result.
5. Continue until we've processed all characters from both strings.
6. Return the merged string.

## Pseudo-code

```
function mergeAlternately(word1, word2):
  mergedString = ""
    for i from 0 to max(word1.length, word2.length) - 1:
      if i < word1.length:
        mergedString += word1[i]
      if i < word2.length:
        mergedString += word2[i]
  return mergedString
```

## Code Implementation

```typescript
export function mergeAlternately(word1: string, word2: string): string {
  let mergedString = "";

  for (let i = 0; i < word1.length + word2.length; i++) {
    if (word1[i]) {
      mergedString += word1[i];
    }

    if (word2[i]) {
      mergedString += word2[i];
    }
  }

  return mergedString;
}
```

## Time and Space Complexity

- Time Complexity: O(n), where n is the length of the longer string. We iterate through both strings once in a single loop.
- Space Complexity: O(n), where n is the sum of the lengths of both input strings. The space is used to store the merged string.

## Conclusion

This solution efficiently merges two strings alternately by iterating through both strings once. It handles cases where the strings have different lengths by appending any remaining characters from the longer string to the end of the merged result. The algorithm is straightforward and easy to understand, making it a good solution for this problem.
