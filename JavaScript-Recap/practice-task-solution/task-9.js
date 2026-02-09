const heights = [167, 190, 120, 165, 137];

function lowest_number (heights) {
      let minimum_number = heights[0];
      for (let height of heights) {
            if (minimum_number > height) {
                  minimum_number = height;
            }
      }
      return minimum_number;
}

let output = lowest_number(heights);
console.log("minimum number of the array", output);

