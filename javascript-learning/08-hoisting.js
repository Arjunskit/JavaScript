// // // // // // // // // Task 1
// // // // // // // // console.log(x);

// // // // // // // // var x = 100;

// // // // // // // // // What happens?

// // // // // // // // // output undefined.

// // // // // // // // // JS treats :
// // // // // // // // // var x;
// // // // // // // // // console.log(x)
// // // // // // // // // x = 100


// // // // // // // // Task 2
// // // // // // // console.log(x);

// // // // // // // let x = 100;

// // // // // // // // What happens?

// // // // // // // // output Reference Error
// // // // // // // // let x is hoisted but it is in TDZ we can't access it before declaration is evaluated.

// // // // // // Task 3
// // // // // greet();

// // // // // function greet() {
// // // // //     console.log("Hello");
// // // // // }

// // // // // // What happens?

// // // // // // output "Hello" because function declaration is hoisted

// // // // Task 4
// // // greet();

// // // const greet = () => {
// // //     console.log("Hello");
// // // };

// // // // What happens?

// // // output reference error because arrow function assign to a const variable so greet is in TDZ we can't access it before declaration is evaluated


// // Task 5 — Interview Challenge

// // Predict the output:

// var x = 10;

// function test() {
//     console.log(x); // undefined

//     var x = 20;

//     console.log(x); // 20
// }

// test();

// console.log(x); // 10


