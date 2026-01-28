let index = 1;
let sum = 0;

while (true) {
      // console.log(index);

      sum = index + sum;

      if (sum >= 100) {
            break;
      }

      index++;
}

console.log(index);
console.log(sum);