let mobiles = [
      {name : "samsung", price : 25000, color: "black"},
      {name : "realme", price : 15000, color: "blue"},
      {name : "infinix", price : 28000, color: "green"},
      {name : "nothing", price : 45000, color: "transparent"},
      {name : "iphone", price : 69000, color: "orange"},
]

function get_cheapest_mobile (mobiles) {
      let minimum = mobiles[0]

      for (let mobile of mobiles){
            if (mobile.price < minimum.price) {
                  minimum = mobile;
            }
      }
      return minimum;
}

let output = get_cheapest_mobile (mobiles);
console.log("cheapest mobile is", output);

