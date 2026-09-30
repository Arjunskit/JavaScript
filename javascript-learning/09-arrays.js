// // // // // // // // Task 1 — Create an Array

// // // // // // // // Create an array containing five programming languages.

// // // // // // // // Print:

// // // // // // // // first element
// // // // // // // // last element
// // // // // // // // array length

// // // // // // // const skills = ["Python", "Java", "C", "C++", "JavaScript"]
// // // // // // // console.log("first element : ", skills[0])
// // // // // // // console.log("last element : ", skills[skills.length - 1])
// // // // // // // console.log("array length : ", skills.length)


// // // // // // Task 2 — Modify

// // // // // // Start with:

// // // // // // let fruits = ["Apple", "Mango"];

// // // // // // Add "Orange" to the end.

// // // // // // Then remove "Apple" from the beginning.

// // // // // let fruits = ["Apple", "Mango"];

// // // // // fruits.push("Orange")

// // // // // console.log(fruits)

// // // // // fruits.shift()

// // // // // console.log(fruits)



// // // // Task 3 — Search

// // // // Create:

// // // let skills = ["Python", "Django", "React", "JavaScript"];

// // // Check whether:

// // // Python
// // // Java
// // // React

// // // exist in the array.


// // // let skills = ["Python", "Django", "React", "JavaScript"];

// // // console.log(skills.includes("Python"))
// // // console.log(skills.includes("Java"))
// // // console.log(skills.includes("React"))

// // // Task 4 — Array of Objects ⭐

// // // Create:

// // let students = [
// //     {
// //         name: "Arjun",
// //         age: 24
// //     },
// //     {
// //         name: "Rahul",
// //         age: 23
// //     },
// //     {
// //         name: "Anu",
// //         age: 25
// //     }
// // ];

// // // // Print:

// // // // Arjun
// // // // Rahul
// // // // Anu

// // // // using a loop.

// // // // for (let student of students){
// // // //     console.log(student.name)
// // // // }

// // // Task 5 — Find Adults

// // // Using the same students array, print only students whose age is 24 or above.

// // for (let student of students) {
// //     if (student.age >= 24) {
// //         console.log(student.name)
// //     }
// // }


// Task 6 — Interview Challenge

// Predict the final array:

// let numbers = [10, 20, 30, 40];

// numbers.push(50); // [10, 20, 30, 40, 50]
// numbers.pop(); // [10, 20, 30, 40]
// numbers.shift(); // [20, 30, 40]
// numbers.unshift(5); // [5, 20, 30, 40]

// console.log(numbers); [5, 20, 30, 40]