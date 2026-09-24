// Task 1 — Identify the types

const name = "Arjun";
const age = 24;
const isStudent = true;
let phone;
const profilePicture = null;
const skills = ["Python", "JavaScript", "React"];


console.log(typeof name) // string
console.log(typeof age) // number
console.log(typeof isStudent) // boolean
console.log(typeof phone) // undefined
console.log(typeof profilePicture) // object
console.log(typeof skills) // object

// Task 2 — Student object

// student
// ├── name
// ├── age
// ├── course
// ├── isGraduated
// ├── skills
// └── address

const student = {
    "name": "Arjun S K",
    "age": 25,
    "course": "Btech IT",
    "isGraduated": true,
    "skills": ["Python", "HTML", "CSS"],
    "address": {
        "city": "Malappuram",
        "state": "Kerala"
    }
}


// Student Name:
// Age:
// Course:
// First Skill:
// City:
console.log("----------------------------")
console.log("Student Name: ", student.name)
console.log("Age: ", student.age)
console.log("Course: ", student.course)
console.log("First Skill: ", student.skills[0])
console.log("City: ", student.address.city)




// Reference test

let person1 = {
    name: "Arjun"
};

let person2 = person1;

person2.name = "Rahul";

console.log(person1.name); // Rahul
console.log(person2.name); // Rahul

