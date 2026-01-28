let colors = ["red", "blue", "green", "yellow", "orange"];
console.log("the original array is :", colors);

// reversing the array using for of loop
// array.unshift() add the value into a new array from end to start. 
// it change the original array
let reversed_color = [];

for (let item of colors) {
      // console.log(item);
      // reversed_color.unshift(item)
}
// console.log("the reversed array is :", reversed_color);

// with for loop 
/** steps to reverse a array using for loop
 * 1. declare a empty array 
 * 2. initial a for loop 
 * 3. inside the for loop condition (declare a variable and decrement 1 from array length 
 *    then variable will greater than or equal 0, then decrement the value of the variable
 * 4. declare a new variable inside the loop body and find the single item from the original 
 *    array ex: array[loop variable]
 * 5. now push the new variable to the empty array that you declare at the first 
 *    ex: empty_array.push(loop variable)
 */

let reversed_arr = [];
for (let color = colors.length - 1; color >= 0; color--) {
      let item = colors[color] // colors is the array, color is the single item of the array
      reversed_arr.push(item)
}
// console.log("the reversed array is :", reversed_arr);

// with while loop 
let reversed_item = [];
let item = colors.length - 1;

while (item >= 0) {
      // console.log(item);
      let single_item = colors[item]
      reversed_item.push(single_item)
      item--;
}
console.log("the reversed array is :", reversed_item);


