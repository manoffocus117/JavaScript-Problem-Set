const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];


function smallest_name (friends) {
      let small_name = friends[0];
      for (let friend of friends) {
            if (friend.length < small_name.length){
                  small_name = friend;
            }
      }
      return small_name;
}

let output = smallest_name (friends);
console.log(output);


