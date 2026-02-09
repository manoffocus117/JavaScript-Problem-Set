const employees = [
      { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
      { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
      { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
      { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function salary_increment (employees) {
      let total_salary = 0;
      let total_increment = 0;

      for (let employee of employees) {
            let increment = employee.increment * employee.experience;
            total_increment = total_increment + increment;

            total_salary = total_salary + employee.starting;
      }
      return total_salary + total_increment;
}

let result = salary_increment (employees);
console.log("total salary has to be provided by the company in a month", result);
