// sum of odd number 

let sum = 0;
for (let index = 91; index <= 129; index++) {
      // console.log(index);
      if (index % 2 === 1) {
            sum = sum + index;
            // console.log(index, sum);
      }
}
// console.log(sum);


// sum of even number 

let total = 0;
for (let index = 51; index <= 85; index++) {
      // console.log(index);
      if (index % 2 === 0) {
            total = total + index;
            // console.log(index, total);
      }
}

console.log(total);