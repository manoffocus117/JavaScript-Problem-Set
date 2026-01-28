// play with number

let num_1 = 45;
let num_2 = 33;

let result;

if (num_1 > num_2) {
      console.log("value of num_1 is bigger than num_2, so the result value is double of num_1");
      result = num_1 * 2;
} else {
      console.log("value of num_1 is smaller than num_2, so the result value is sum of num_1 and num_2");
      result = num_1 + num_2;
}

console.log(result);

// with ternary operator
result = num_1 > num_2 ? result = num_1 * 2 : result = num_1 + num_2;

console.log(result);

