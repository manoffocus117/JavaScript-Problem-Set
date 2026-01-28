// friendship broker by marks

let my_score = 89;
let friends_score = 33;

if (my_score >= 80) {
      if (friends_score >= 80) {
            console.log("go to lunch with your friends");
      } else if (friends_score >= 60 && friends_score < 80) {
            console.log("tell them gook luck, next time");
      } else if (friends_score >= 40 && friends_score < 60) {
            console.log("unseen your friends message");
      } else {
            console.log("block your friends")
      }
} else {
      console.log("go to home, act like sad and sleep");
}

