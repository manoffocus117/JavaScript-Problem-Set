/**
 * upto 100 => 100
 * more than 101 - 200 => 90
 * more than 200 => 80
 */

function discounted_price (quantity) {
      if (quantity <= 100) {
            let total = quantity * 100;
            return total;
      } else if (quantity <= 200) {
            let total = quantity * 90;
            return total;
      } else {
            let total = quantity * 80;
            return total;
      }
}

let output = discounted_price(201);
console.log(output);

