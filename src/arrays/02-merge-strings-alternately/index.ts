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
