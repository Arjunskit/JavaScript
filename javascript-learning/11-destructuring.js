/* // Task 1 — Object

// Create:

const student = {
    name: "Arjun",
    age: 24,
    course: "B.Tech IT"
};

// Extract all three properties using destructuring.

const {name, age, course} = student

console.log(name)
console.log(age)
console.log(course) */

/* // Task 2 — Rename

// From:

const user = {
    name: "Arjun",
    age: 24
};

// Extract:

// name → userName
// age → userAge

const {name: username, age: userage} = user

console.log(username)
console.log(userage) */

/* // Task 3 — Default Value

// Create:

const product = {
    name: "Laptop",
    price: 50000
};

// Try to extract brand with a default value:

const {brand="Unknown"} = product

console.log(brand) */

/* // Task 4 — Array
const numbers = [10, 20, 30, 40];

// Extract:

// first → 10
// second → 20
// fourth → 40

// Skip 30.

const [first, second, fourth] = numbers

console.log(first)
console.log(second)
console.log(fourth) */

/* // Task 5 — Nested Object

// Create:

const user = {
    name: "Arjun",
    address: {
        city: "Malappuram",
        state: "Kerala"
    }
};

// Extract:

// city
// state

// using destructuring.


const { address: {city, state} } = user

console.log(city)
console.log(state) */

// Task 6 — Array of Objects ⭐

const users = [
    { name: "Arjun", role: "Developer" },
    { name: "Rahul", role: "Designer" },
    { name: "Anu", role: "Tester" }
];

// Use a for...of loop with destructuring and print:

// Arjun - Developer
// Rahul - Designer
// Anu - Tester

for (const {name, role} of users) {
    console.log(name + " - " + role)
}
