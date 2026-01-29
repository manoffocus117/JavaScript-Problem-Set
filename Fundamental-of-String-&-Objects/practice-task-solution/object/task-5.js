let person = {
      name: 'John Doe',
      age: 25,
      city: 'Example City',
      isStudent: true
};

// with for in loop
for (let key in person) {
      // console.log("key :", key, person[key], "|", "type :", typeof person[key]);
}

/** breakdown
 * step 1. loop through the array using for in loop
 * step 2. we have the keys of the array. now we can find keys value using bracket
 *    notation array[key]
 * step 3. now we have the keys value of the array. now we can check the type of 
 *    the value using the typeof method
 * step 4. now we have the keys, values, and typeof of the array property value
 * step 5. now we can print all together 
 *    like : console.log("key :", key, person[key], "|", "type :", typeof person[key]) 
 * 
 */

// with for loop
let keys = Object.keys(person);
// console.log(keys);

for (let index = 0; index < keys.length; index++) {
      // console.log(index);
      let key = keys[index];
      // console.log(key);

      let value = person[key]
      // console.log(typeof value);
      console.log("key :", key, "value: ", value, "type :", typeof value );
}

/** breakdown
 * step 1. declare a variable to store object keys 
 * step 2. initial for loop with the length of the keys variable
 * step 3. declare a new variable to find kays of the array using bracket 
 *    notation like: keys[index]
 * step 4. now we have the keys value. now declare a new variable to find keys value 
 *    using bracket notation like: person[key]
 * step 4. now we have the value of the keys. we can check the type of the value 
 *    using typeof method
 * step 5. now we can print everything together 
 *    like: console.log("key :", key, "value :", value, "type :", typeof value) 
 * 
 */

