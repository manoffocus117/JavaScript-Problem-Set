// multiplication table for 5 

let number = 5;
let index = 1;

while (index <= 10) {
      let result = index * number;
      // console.log(result);
      // console.log(number + " * " + index + " = " + result);

      // with template string 
      console.log(`${number} * ${index} = ${result}`);

      index++;
}