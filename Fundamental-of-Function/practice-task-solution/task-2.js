function odd_even(number) {
      // console.log(number);
      if (number % 2 === 0) {
            // return number * 2;
            let multiply = number * 2;
            return multiply;
      } else {
            // return number / 2;
            let divide = number / 2;
            return divide;
      }
}

// odd_even(33);
let output = odd_even(31);
console.log(output);



