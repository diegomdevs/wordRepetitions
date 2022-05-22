/**
 * This function will normalize a word
 * @param word word to normalize
 * @returns normalized word
 */
function normalize(word: string): string {
  return word.toLowerCase().replace(/[.,¡!¿?]/, "");
}

/**
 * This function will print how many times a word repeats
 * @param text words
 */
export function wordRepetitions(text: string) {
  let dict: { [key: string]: number } = {};
  let separatedWords = text.split(" ");
  for (const word of separatedWords) {
    if (normalize(word) in dict) {
      dict[normalize(word)]++;
    } else {
      dict[normalize(word)] = 1;
    }
  }
  console.log(dict);
}
