let car = {
      maker : "toyota",
      model : "corolla",
      year : 2020,
}

// with dot notation
car.passenger = 5; // we can add a new property using dot notation

// console.log(car);

// with bracket notation
let is_new = "is_new"; // declare a new variable to assign a new property or key
car[is_new] = true; // we can add a new property using bracket notation

// console.log(car);

// with Object.assign() method
Object.assign(car, {fuel : "diesel"}); // car is the object, fuel is the property and diesel is the value
console.log(car);
