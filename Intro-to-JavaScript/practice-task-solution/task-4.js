let a = isNaN("11");
console.log(a);

/*
output is false.

Step-by-step what happens

"11" is a string

isNaN() tries to convert it to a number:

Number("11") → 11

11 is a valid number

So it is NOT NaN

✅ Therefore:

isNaN("11") → false
*/

let b = isNaN(2-10);
console.log(b);

/*
output is false. 

1️⃣ JavaScript evaluates the expression first
2 - 10 = -8

So the code becomes:
isNaN(-8)

2️⃣ What does isNaN() do?
isNaN() checks whether the value is NOT a number.
-8 is a valid number
Negative numbers are still numbers ✅

3️⃣ Final result
isNaN(-8) → false

Because -8 is not NaN
*/