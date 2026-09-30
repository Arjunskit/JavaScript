// Task 5 — User

// Create a function:

// createUser("Arjun", 24, "Developer");

// Return an object containing:

// name
// age
// role

function createUser(name, age, role) {
    return {
        name,
        age,
        role
    }
}


const user = createUser("Arjun", 25, "Fullstack Developer")

console.log(user)


// Task 6 — Arrow Function

// Convert:

// function multiply(a, b) {
//     return a * b;
// }

// into an arrow function.

const multiply = (a, b) => a * b

console.log(multiply(10, 20))