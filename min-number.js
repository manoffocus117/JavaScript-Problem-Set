let price = [15000, 20000, 30000, 50000, 69000, 100000];

function get_min (numbers) {
      // console.log(numbers);

      let min_number = numbers[0];

      for (let num of numbers) {
            if (num < min_number) {
                  min_number = num;
            }
      }

      return min_number;

}

// get_min(price);

let output = get_min(price);
console.log("smallest number is", output);





