// Task 1 — Shopping calculation

const price = 1500;
let quantity = 3;

let total_price = price * quantity

console.log(total_price) // 4500

quantity += 2


let new_total_price = price * quantity

console.log(new_total_price) // 7500


// Age checker

const age = 24;

const age_checker = age > 18

console.log(age_checker) // true

// Login system

const isLoggedIn = true;
const isAdmin = false;

// Create expressions to check:

// Is the user logged in?
// Is the user an admin?
// Is the user logged in AND an admin?
// Is the user logged in OR an admin?

console.log("Is the user logged in? ", isLoggedIn) // true
console.log("Is the user an admin? ", isAdmin) // false
console.log("Is the user logged in AND an admin? ", isLoggedIn && isAdmin) // false
console.log("Is the user logged in OR an admin? ", isLoggedIn || isAdmin) // true

// Predict before running


console.log(5 == "5"); // true
console.log(5 === "5"); // false

console.log("10" + 5); // 105
console.log("10" - 5); // 5

console.log(Boolean(0)); // false
console.log(Boolean(1)); // true

console.log(Boolean("")); //false
console.log(Boolean("hello")); // true


console.log(10 + "20"); // 1020
console.log(10 - "20"); // -10
console.log(true + 1); // 2
console.log(false + 1); // 1
console.log(null + 1); // 1
console.log(undefined + 1); // NaN

console.log("20" < "3"); // true
console.log("20" < 3);   // false
console.log(null >= 0);  // true
console.log(undefined < 0); // false

console.log(10 == "10");  // true
console.log(10 === "10"); // false

console.log(true == 1);  // true  (true -> 1)
console.log(false == 0); // true  (false -> 0)
console.log("10" == 10); // true  ("10" -> 10)

console.log(null == undefined); // true
console.log(null == 0);         // false
console.log(undefined == 0);    // false