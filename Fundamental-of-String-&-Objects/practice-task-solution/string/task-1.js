let string = "i am a hardworking men";

// with string.split()
let letters = string.split("a").length - 1;
// console.log(letters);

/** breakdown 
 * step 1. declare a variable and split the string with "a" like: split("a")
 * step 2. now count the parts of the string using array.length method
 * step 3. now the length by -1, because if the letter appears N time, 
 *    the split creates N + 1 parts 
 * step 4. print the variable
 * 
 */

// with for loop
let count = 0;

for (let char of string) {
      // console.log(char);
      if (char === "a") {
            // console.log(char);
            count++;
      }
}
console.log(count);

/** breakdown
 * step 1. declare a variable with a 0 value;
 * step 2. loop through the string using for of loop
 * step 3. now we have every letter of the string. we can check each character 
 *    using if statement like: (char === "a")
 * step 4. inside the if statement, increase value of the count variable by 1 if the 
 *    character is correct 
 * step 5. print the count variable
 * 
 */

