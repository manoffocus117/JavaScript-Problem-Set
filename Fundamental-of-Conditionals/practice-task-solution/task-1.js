// grade calculator 

let score = 67;

if (score <= 100) {
      if (score >= 90 || score === 100) {
            console.log("you got A+ grade");
      } else if (score >= 80 || score === 89) {
            console.log("you got A- grade");
      } else if (score >= 70 || score === 79) {
            console.log("you got B grade");
      } else if (score >= 60 || score === 69) {
            console.log("you got C grade");
      } else if (score >= 33 || score === 59) {
            console.log("you got D grade");
      } else {
            console.log("you failed");
      }
} else {
      console.log("invalid value");
}