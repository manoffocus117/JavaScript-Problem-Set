// sum of odd number 

let index = 81;
let sum = 0;

while (index <= 131) {
      if (index % 2 === 1) {
            sum  = sum + index;
            // console.log(index, sum);
      }
      index++;
}

// console.log(sum);


// sum of even number 

let initial = 206;
let total = 0;

while (initial <= 311) {
      if (initial % 2 === 1) {
            total = total + initial;
            console.log(initial, total);
      }
      initial++;
}
console.log(total);