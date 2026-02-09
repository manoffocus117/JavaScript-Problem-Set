let height = [60, 66, 70, 65, 69];

function get_max(numbers) {

      let max_num = numbers[0];
      for (num of numbers) {
            // console.log(num);
            if (num > max_num){
                  max_num = num;
            }
      }


      return max_num;
}

let output = get_max(height);
console.log(output);


