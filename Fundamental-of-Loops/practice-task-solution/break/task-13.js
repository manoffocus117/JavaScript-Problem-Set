let index = 1;

while (index <= 100) {
      let square = Math.sqrt(index);

      if (Number.isInteger(square) && index !== 1) {
            console.log("first square is ", index);
            break;
      }

      console.log(index);
      index++;
}