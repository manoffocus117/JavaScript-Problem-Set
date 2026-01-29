let text = "how to capitalized every word";

let split_word = text.split(" ");
// console.log(split_word);

let result = "";

for (let word of split_word) {
      // console.log(word);
      result += word[0].toUpperCase() + word.slice(1) + " ";
}

console.log(result);


/** breakdown 
 * step 1. split the string using split() method. 
 * step 2. now we have a array of words. now loop through every word
 * step 3. now capitalized every word using bracket notation with index of 0 with
 *    toUpperCase() method. like: word[0].toUppercase()
 * step 4. now add remaining letters using slice(1) method. like: word.slice(1)
 * step 5. now declare a empty variable to combine everything and store
 *    like: result += word[0].toUpperCase() + word.slice(1) + " ";
 * step 6. print the result variable with trim() method to remove extra space
 * 
 */

