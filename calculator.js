
function addition(num_1, num_2) {
      return num_1 + num_2;
}

function subtract(num_1, num_2) {
      return num_1 - num_2;
}

function multiply(num_1, num_2) {
      return num_1 * num_2;
}

function divide(num_1, num_2) {
      return num_1 / num_2;
}

function modulus(num_1, num_2) {
      return num_1 % num_2;
}


function calculator (num_1, num_2, operation) {
      if (operation === "addition") {
            let result = addition(num_1, num_2);
            return result;
      } else if (operation === "subtract") {
            let result = subtract(num_1, num_2);
            return result;
      } else if (operation === "multiply") {
            let result = multiply(num_1, num_2);
            return result;
      } else if (operation === "divide") {
            let result = divide(num_1, num_2);
            return result;
      } else if (operation === "modulus") {
            let result = modulus(num_1, num_2);
            return result;
      } else {
            return "invalid expression";
      }
}


let output = calculator(12, 13, "addition");
console.log(output);
