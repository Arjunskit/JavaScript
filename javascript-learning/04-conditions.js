// Task 1 — Age

// Create:
// let age = 22;
// Print:
// Adult
// if age is 18 or above.
// Otherwise:
// Minor

let age = 12

if (age >= 18) {
    console.log("Adult")
} else {
    console.log("Minor")
}

// Task 2 — Marks
// Create:
// let marks = 85;
// Create this grading system:
// 90+ → A+
// 80-89 → A
// 70-79 → B
// 60-69 → C
// Below 60 → Fail
// Use if / else if / else

let marks = 85

if (marks >= 90) {
    console.log("A+")
} else if (marks >= 80) {
    console.log("A")
} else if (marks >= 70) {
    console.log("B") 
} else if (marks >= 60) {
    console.log("C")
} else {
    console.log("Fail")
}


// Task 3 — Login
// Create:
// let username = "arjun";
// let password = "1234";
// Check whether both are correct.
// Output either:
// Login successful
// or:
// Invalid credentials
// Use &&.

let username = "arjun"
let password = "1234"

if (username === "arjun" && password === "1234") {
    console.log("Login successful")
} else {
    console.log("Invalid credentials")
}


// Task 4 — Role
// Create:
// let role = "admin";
// Use switch:
// admin   → Admin Dashboard
// user    → User Dashboard
// manager → Manager Dashboard
// other   → Unknown Role


let role = "admin"

switch (role) {
    case "admin":
        console.log("Admin Dashboard")
        break
    case "user":
        console.log("User Daashboard")
        break
    case "manager":
        console.log("Manager Dashboard")
        break
    default:
        console.log("Unknown Role")
}


// Task 5 — Ternary

// Create:

// let isOnline = true;

// Using a ternary operator, produce:

// Online

// or:

// Offline


let isOnline = true

let result = isOnline ? "Online" : "Offline"

console.log(result)