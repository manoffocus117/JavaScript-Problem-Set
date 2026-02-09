let cart = [
      {product_name : "brush", price : 50},
      {product_name : "bottle", price : 450},
      {product_name : "shampoo", price : 250},
      {product_name : "facewash", price : 480},
]

function get_total_price (products) {
      let sum = 0;
      for (let product of products) {
            // console.log(product.price);

            sum = sum + product.price;
      }
      return sum;
}

// get_total_price(cart);
let output = get_total_price(cart);
console.log("total price of the products is", output);




