// Task 1 — Array

let languages = ["Python", "JavaScript", "Java", "C"];

for (let language of languages) {
     console.log(language)
}

// Task 2 - Object

let student = {
    name: "Arjun",
    course: "B.Tech IT",
    skill: "Full Stack Development"
};

for (let key in student) {
    console.log(key, student[key])
}

// Task 5 — break

// Print numbers from 1 to 10, but stop when the number reaches 6.

for (let i=1; i <= 10; i++) {
    console.log(i)
    if(i === 6) {
        break
    }
}

// Task 6 — continue

// Print numbers from 1 to 5 but skip 3.
let i = 1
while (i <= 5) {
    if (i === 3) {
        continue
    }
    console.log(i)
    i++
}