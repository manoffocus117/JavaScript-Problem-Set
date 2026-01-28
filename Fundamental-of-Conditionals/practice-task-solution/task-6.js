// Ticket fare Calculator

let age = 18;
let is_student = true;
let ticket_price = 800;
let discount = 0;

if (age <= 10) {
      console.log("you are a child. your ticket is free");
} else if (is_student === true) {
      // 50% discount
      discount = ticket_price * 50 / 100;
      console.log("you are a student. you got 50% discount, your ticket price is", 
            ticket_price - discount
      );
} else if (age >= 60) {
      // 15% discount
      discount = ticket_price * 15 / 100;
      console.log("you are a senior citizen. you got 15% discount, your ticket price is", 
            ticket_price - discount
      );
} else {
      console.log(ticket_price);
}

