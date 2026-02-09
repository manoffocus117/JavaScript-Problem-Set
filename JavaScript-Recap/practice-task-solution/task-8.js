// step 1 declare a array of objects
let mobiles = [
      { name: "samsung", price: 25000, color: "black" },
      { name: "realme", price: 15000, color: "blue" },
      { name: "infinix", price: 28000, color: "green" },
      { name: "nothing", price: 45000, color: "transparent" },
      { name: "iphone", price: 69000, color: "orange" },
]

// step 2 declare a function with a parameter of mobiles
function expensive_mobile (mobiles) {
      // step 4 declare a variable and set a indexing using bracket notation with index of zero
      let expensive = mobiles[0];
      // step 3 loop through the array to get single mobile 
      for (let mobile of mobiles) {
            // step 5 compare the mobile price by previous indexing variable price 
            if (expensive.price < mobile.price) {
                  // step 6 set the expensive mobile to the previous indexing variable  
                  expensive = mobile;
            }
      }
      // step 7 return the expensive variable 
      return expensive;
}

// step 3 initial a variable and call the function with the mobiles array as a parameter 
let output = expensive_mobile(mobiles);

// step 8 console the output variable
console.log(output);



