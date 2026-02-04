/** 
 * step 1. declare an array of numbers 
 * step 2. initialize a variable called "count", because we need to count how many times
 *    the numbers repeated
 * step 3. declare a variable called "find" to find the number
 * 
 * step 4. loop through the array to check each number ane by one with the length of the array
 * step 5. compare each element by find variable with if statement
 * step 6. increase the value of the count variable by 1, if the number is equal to find variable
 * step 7. console the count variable to see the output  
 * 
 */

// step 1.
let numbers = [5, 6, 11, 12, 98, 5];

// step 2.
let count = 0;

// step 3.
let find = 5;

// step 4.
for (let i = 0; i <= numbers.length; i++) {

      // step 5.
      if (numbers[i] === find) {
            // step 6.
            count++;
      }
}
// step 7.
// console.log(count);


// with function

// step 2.
function number_counter(array, num) {
      // step 6.
      let counter = 0;

      // step 4.
      for (let number of array) {
            // step 5.
            if (number === num) {
                  // step 7.
                  counter++;
            }
      }
      // step 8.
      return counter;
}

// step 1.
let arr = [11, 2, 44, 32, 11, 2];

// step 3
let output = number_counter(arr, 10);

// step 9.
console.log("count of the number is", output);

/** breakdown
 * step 1. declare an array
 * step 2. declare a function with two parameters or arguments 
 * step 3. declare a variable called "output" to call the function with one array and a number as a parameter
 * step 4. loop through the array to each number one by one 
 * step 5. compare each element with number parameter using if statement
 * step 6. declare a counter variable 
 * step 7. increase the counter value by one, id the element equal to number parameter
 * step 8. return the counter variable
 * step 9. console the output variable to see the counter value
 * 
 */