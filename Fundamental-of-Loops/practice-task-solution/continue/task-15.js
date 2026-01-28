// with single condition
for (let number = 55; number <= 85; number++) {
      if (number % 2 === 1 && number % 5 !== 0) {
            // console.log(number);
      }
}

for (let index = 55; index <= 85; index++) {
      if (index % 5 === 0) {
            continue;
      }
      // console.log(index);

      if (index % 2 === 1) {
            console.log(index);
      }
}