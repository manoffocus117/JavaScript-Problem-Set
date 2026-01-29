let text = "this is my favourite work";

let vowels = ["a", "e", "i", "o", "u"];

let has_all_vowel = true;

for (let vowel of vowels) {
      if (!text.includes(vowel)) {
            has_all_vowel = false;
            break;
      }
}

console.log(has_all_vowel);

/** breakdown
 * step 1. List of vowels
 * step 2. Assume the string is valid
 * step 3. Check each vowel. Returns true if the vowel exists in the string.
 *    If any vowel is missing → result becomes false
 * step 4. Stop early
 */



