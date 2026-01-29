let student = {
      name: "Hamim Sakep",
      id: 5421,
      physics: {
            subject: "HSC Physics",
            author: "Shahjahan Tapan",
            marks: 30
      }
}

// with dot notation
// console.log("marks of the physics is :" , student.physics.marks);

// with bracket notation (always use quote [ "" ] with bracket notation)
let marks = student["physics"]["marks"];
console.log(marks);

