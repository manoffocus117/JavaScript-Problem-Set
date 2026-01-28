// step 1. initial the string variable
let statement = "i am a hard working person";

// step 2. split the variable using the string.split(" ") method with white space and we will get a array
let statement_words = statement.split(" ");
// console.log(statement_words);

// step 4. declare a empty array to store the single word as elements of the array
let statement_reversed = [];

// step 3. loop through the array and we will get every single word  
for (let word of statement_words) {
      // console.log(word);
      // step 5. now we can push every single reversed word using unshift
      statement_reversed.unshift(word); // statement_reversed is the empty array to store the words
}

// step 6. finally we can convert the reversed array into string using array.join(" ") method with white space
// console.log(statement_reversed.join(" "));

let reversed_statement = statement_reversed.join(" ")

// step 7. print 
console.log(reversed_statement);


// another way with array.reverse() 
// step 1 => split the string using the split(" ") method with white space. we will get a array
// step 2 => reverse the array using the array.reverse() method. 
// step 3 => now we have a reversed array and we can join the array using join(" ") 
//    method with white space

let another_reversed = statement.split(" ").reverse().join(" ");

console.log(another_reversed);





