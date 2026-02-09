// step 1. declare a array of object
let products = [
      {product_name : "shirt", price : 800, quantity : "2"},
      {product_name : "t-shirt", price : 500, quantity : "2"},
      {product_name : "pant", price : 700, quantity : "2"},
      {product_name : "glasses", price : 1200, quantity : "2"},
]

// step 2 declare a function with product parameter or argument
function total_spent (products) {
      // step 6 declare a variable with a value of zero ( 0 ) to store total price of all of the products 
      let total = 0;
      // step 4 loop through the products array to get single product
      for (let product of products) {
            // step 5 declare a variable to calculate total cost of the products using dot( . ) notation
            let per_product_cost = product.price * product.quantity;
            // step 7 add total price to the price variable
            total = total + per_product_cost;
      }
      // step 8 return the total variable
      return total;
}

// step 3 initial a variable and call the function with products parameter or argument 
let output = total_spent(products);

// step 9 console the output variable
console.log("total shopping cost", output);


