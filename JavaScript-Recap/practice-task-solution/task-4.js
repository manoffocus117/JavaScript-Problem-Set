// step 2. declare a function with a parameter 
function word_length (string) {
      // step 3. split the string 
      let split_word = string.split(" ");

      // step 6. declare a empty variable to store the longest word 
      let longest_word = "";

      // step 4. loop through the each splitted word 
      for (let word of split_word) {
            // step 5. Compares the length of the current word with the length of longest_word
            if (word.length > longest_word.length) { 
                  // step 7 If current word is longer, it replaces longest_word
                  longest_word = word;
            }
      }
      // step 8 return the longest word variable
      return longest_word;
}

// step 1. declare a string variable
let string = "i am a hardworking person";

// word_length(string);

// step 9. call the function and pass with the string as a parameter
let output = word_length(string);
// step 10. console the output variable
console.log("the longest word in the string is", output);

