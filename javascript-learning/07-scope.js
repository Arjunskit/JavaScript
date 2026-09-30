// // // // Task 1 — Function Scope

// // // What happens here?

// // // function test() {
// // //     let message = "Hello";
// // // }

// // // console.log(message); // Reference Error

// // // Before running it, predict the result.


// // // Task 2 — Block Scope

// // // Predict:

// // // if (true) {
// // //     let x = 10;
// // //     console.log(x); // 10
// // // }

// // // console.log(x); // Reference Error

// // // What happens?



// // // Task 3 — var vs let

// // // Predict the output:

// // // if (true) {
// // //     var a = 10;
// // //     let b = 20;
// // // }

// // // console.log(a); // 10
// // // console.log(b); // Reference Error

// // // Don't run it first. Think about the scope.

// // // Task 4 — Scope Chain

// // // Predict the output:

// // let a = 10; // global scope

// // function outer() {

// //     let b = 20; // outer function scope

// //     function inner() {

// //         let c = 30; // inner function scope

// //         console.log(a); // check inner scope (fail) -> outer scope (fail) -> global scope (success) 10
// //         console.log(b); // check inner scope (fail) -> outer scope (success)    20
// //         console.log(c); // check inner scope (success)  30
// //     }

// //     inner();
// // }

// // outer(); 



// // Task 5 — Shadowing

// // Predict:

// let name = "Arjun";

// function test() {

//     let name = "Rahul";

//     console.log(name); // check name in inner scope see "Rahul" so name in innerscope shadows name in global scope; "Arjun" -> hidden
// }

// test();

// console.log(name); // "Arjun"

// // Expected output has two different names.

