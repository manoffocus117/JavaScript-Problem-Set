
function multiply(num_1, num_2) {
      if (typeof num_1 !== "number" || typeof num_2 !== "number") {
            return "invalid input";
      }

      return num_1 * num_2;
}

let output = multiply(11, 5);
// console.log(output);

function full_name(first_name, last_name) {
      if (typeof first_name !== "string" || typeof last_name !== "string") {
            return "invalid input";
      }

      let full_name = first_name + " " + last_name;
      return full_name;
}

let result = full_name("habul", "khan");
// console.log(result);

function get_price(product) {
      if (typeof product !== "object") {
            return "invalid input";
      }

      let price = product.price;
      return price;
}

let product = {
      name: "facewash",
      brand: "wow",
      price: 480,
}

let price = get_price(66);
// console.log(price);


function get_number(numbers) {
      if (Array.isArray(numbers) === false) {
            return "invalid input";
      }

      let index = numbers[2];
      return index;
}

let numbers = get_number([1, 23, 45, 5, 67]);
console.log(numbers);

