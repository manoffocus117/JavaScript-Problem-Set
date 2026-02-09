/**
 * first 100 => 100
 * 101 - 200 => 90
 * more than 200 => 80
 * 
 */

function layered_discount (quantity) {
      const first_100_price = 100;
      const second_100_price = 90;
      const above_200_price = 80;

      if (quantity <= 100) {
            let total_price = quantity * first_100_price;
            return total_price;
      } else if (quantity <= 200) {
            let first_100_total = 100 * first_100_price;

            let remaining_quantity = quantity - 100;
            let total_remaining_price = remaining_quantity * second_100_price;

            let total_price = first_100_total + total_remaining_price;
            return total_price;
      } else {
            let first_100_total = 100 * first_100_price;

            let second_100_total = 100 * second_100_price;

            let remaining_quantity = quantity - 200;

            let total_remaining_price = remaining_quantity * above_200_price;

            let total_price = first_100_total + second_100_total + total_remaining_price;
            return total_price;
      }

}

let output = layered_discount(230);
console.log(output);
