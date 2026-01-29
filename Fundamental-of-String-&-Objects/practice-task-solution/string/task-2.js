let text = "i Am a hardworking men";

let small_letter = text.split("a").length - 1;
// console.log(small_letter);

let capital_letter = text.split("A").length - 1;
// console.log(capital_letter);

let capital_count = 0;
for (let capital of text) {
      // console.log(capital);
      if (capital === "A") {
            // console.log(capital);
            capital_count++;
      }
}
// console.log(capital_count);

let small_count = 0;
for (let small of text) {
      if (small === "a") {
            small_count++;
      }
}
// console.log(small_count);

console.log("smaller letter :", small_count, "capital letter :", capital_count);


