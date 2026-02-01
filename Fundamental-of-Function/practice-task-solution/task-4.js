function count_zero (binary_string) {
      // console.log(binary_string);
      let count = 0;
      for (let zero of binary_string) {
            // console.log(zero);
            if (zero === "0"){
                  count++;
            }
      }
      return count
}

let binary_string = "10010010110";
// count_zero(binary_string);

let output = count_zero(binary_string);
console.log("the number of zero in the binary string is", output);
