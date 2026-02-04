/**
 * step 1. declare a variable to store string
 * step 2. declare a function with a parameter as a string
 * step 3. convert the string to lowercase using toLowerCase() method
 * step 4. declare a variable as vowels reference 
 * step 5. loop through the string parameter 
 * step 6. check each element includes in the vowels string 
 * step 7. declare a variable called "count" 
 * step 8. if vowels is include in the string variable, then increase the count value by 1
 * step 9. return the count variable
 * step 10. declare a variable called "output" and call the function with the value of the string 
 *    as a parameter 
 * step 11. console the output variable
 */

// step 2
function count_vowels(string) {
      // console.log(string);
      // step 3
      string = string.toLowerCase(); // handle uppercase letters 

      // step 4
      let vowels = "aeiou"; // vowels reference

      // step 7
      let count = 0;

      // step 5
      for (let char of string) {
            // step 6
            if (vowels.includes(char)) {
                  // step 8
                  count++;
            }
      }
      // step 9
      return count;
}

// step 1
let string = "this is a text";

// step 10
let output = count_vowels(string);
// step 11
console.log("count of the vowels in string is", output);
 
