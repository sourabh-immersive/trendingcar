/**
 * Return limited words from given string and add ellipsis if truncated.
 * @param {string} text - The input string.
 * @param {number} wordLimit - The maximum number of words to include.
 * @returns {string} - The truncated string with ellipsis if truncated.
 */
export default function limitWords(text: string, wordLimit: number): string {
  // Split the text into an array of words
  const wordsArray = text.split(" ");
  
  // Check if the number of words exceeds the word limit
  if (wordsArray.length <= wordLimit) {
    // Return the original text if within the word limit
    return text;
  }

  // Get the first `wordLimit` words and add ellipsis
  const limitedWords = wordsArray.slice(0, wordLimit).join(" ");
  return `${limitedWords}...`;
}