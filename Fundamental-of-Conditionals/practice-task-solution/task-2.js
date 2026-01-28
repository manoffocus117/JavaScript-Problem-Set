// BMI (Body Mass Index) Calculator and Health Category

let height = 1.6; // height in meter
let weight = 45; // weight in kilo gram

let bmi = weight / Math.pow(height, 2);

console.log("your bmi is " + bmi.toFixed(2));

if (bmi <= 18.5) {
      console.log("you are underweight");
} else if (bmi <= 24.9) {
      console.log("you are normal");
} else if (bmi <= 29.9) {
      console.log("you are overweight");
} else {
      console.log("you are obese");
}

