let products = [
      {product_name : "brush", price : 50, quantity : 3},
      {product_name : "bottle", price : 450, quantity : 2},
      {product_name : "shampoo", price : 250, quantity : 4},
      {product_name : "facewash", price : 480, quantity : 1},
]

function total_price (products) {
      let sum = 0;

      for (let product of products) {
            let per_product_cost = product.price * product.quantity;
            sum = sum + per_product_cost;
      }
      return sum;
}

let output = total_price(products);
console.log(output);

