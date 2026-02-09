let vegetables = [
      {vegetable_name : "potato", price : 20, quantity : 5},
      {vegetable_name : "tomato", price : 60, quantity : 1},
      {vegetable_name : "onion", price : 40, quantity : 2},
      {vegetable_name : "garlic", price : 80, quantity : 1},
]

function total_vegetable_price (vegetables) {
      let total_spent = 0;
      for (let vegetable of vegetables) {
            let total_cost = vegetable.price * vegetable.quantity;
            total_spent = total_spent + total_cost;
      }
      return total_spent;
}

let output = total_vegetable_price (vegetables);
console.log("total vegetable cost", output);



