function make_avg(numbers) {
      let sum = 0;
      for (let number of numbers) {
            // console.log(number);
            sum = sum + number;
      }
      let average = sum / numbers.length;
      return average;
}


let numbers = [1, 2, 3, 4, 5];
// make_avg(numbers)

let output = make_avg(numbers);
console.log("the average of the numbers is", output);
