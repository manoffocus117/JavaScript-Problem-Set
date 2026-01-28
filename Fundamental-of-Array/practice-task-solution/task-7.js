let numbers = [12, 33, 43, 56, 69, 90, 89];
let even_numbers = [];

// with for of loop
for (let num of numbers) {
      // console.log(num);
      if (num % 2 === 0) {
            // console.log(num);
            even_numbers.push(num)
      }
}
// console.log(even_numbers);

// with for loop 
let even_nums = [];
for (let index = 0; index < numbers.length; index++) {
      let num = numbers[index];
      // console.log(num);
      if (num % 2 === 0) {
            // console.log(num);
            even_nums.push(num)
      }
      
}
// console.log(even_nums);

// with while loop 
let init = 0;
let even_item = [];

while (init < numbers.length) {
      // console.log(init);
      let single_item = numbers[init];
      // console.log(single_item);
      if (single_item % 2 === 0) {
            // console.log(single_item);
            even_item.push(single_item);
      }
      init++;
}
console.log(even_item);

