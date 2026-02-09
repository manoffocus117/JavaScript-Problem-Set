// step 1
const phones = [
      { model: "PhoneA", brand: "Iphone", price: 95000 },
      { model: "PhoneB", brand: "Samsung", price: 40000 },
      { model: "PhoneC", brand: "Oppo", price: 26000 },
      { model: "PhoneD", brand: "Nokia", price: 35000 },
      { model: "PhoneE", brand: "Iphone", price: 105000 },
      { model: "PhoneF", brand: "HTC", price: 48000 },
];

// step 2
function find_average_phone_price (phones) {
      // step 5 declare a empty variable to store the total price 
      let total_price = 0;
      // step 4
      for (let phone of phones) {
            // step 6 add phone price on total price variable
            total_price = total_price + phone.price;
      }
      // step 7 divide the total price by phones length
      return total_price / phones.length;
}

// step 3
let output = find_average_phone_price(phones);
// step 8
console.log("average phones price", Math.floor(output));
