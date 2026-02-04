// convert temperature (F=(C * 1.8)+32)

function temp_conversion (celsius) {
      // console.log(celsius);
      let fahrenheit = (celsius * 1.8) + 32;
      return fahrenheit;
}

// temp_conversion(32);

let result = temp_conversion(32);
console.log("temperature in fahrenheit is", result, "F");

