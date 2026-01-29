let text = "eXample text with x and X";

// let new_text = text.replace("x", "y");

// console.log(new_text);

// with for loop 
let result = "";

for (let char of text) {
      if (char === "x") {
            result += "y";
      } else if (char === "X") {
            result += "Y";
      } else {
            result += char;
      }
}
// console.log(result);

// with regEx

let something = text.replace(/x|X/g, match => {
      return match === "x" ? "y" : "Y";
});
console.log(something);

/** breakdown
 * Step 1: RegEx pattern : x|X => match x OR X, g => replace all occurrences, not just the first one
 * Step 2: Callback function : If matched character is x => replace with y, If matched character is X => replace with Y
 * 
 * 
 * 
 */

