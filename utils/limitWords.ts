/**
 * Return limited words from given string
 * @param {string} string or number limit
 * @returns {string} - Limited string
 */
export default function limitWords(text: string, wordLimit: number) {
    // Split the text into an array of words
    const wordsArray = text.split(" ");
    // Get the first `wordLimit` words
    const limitedWords = wordsArray.slice(0, wordLimit);
    // Join the limited words back into a string
    return limitedWords.join(" ");
  }