let name = 'Garrett';
// 1.    Create a new project folder and connect it to a GitHub repo. Copy this lab into a README.md file.
const states = 50;
// 4.    Create a constant that contains the number of states in the U.S. and name it appropriately.

let sum = 5 + 4;  
// 5.    Compute the result of adding 5 and 4 and store it in an appropriately named variable.

function sayHello() {
    alert('Hello World!')};
// 7.    Write a function called sayHello that displays an alert that says Hello World!

sayHello();

function checkAge(n, a) {
    if (a < 21) {
        alert('Sorry ' + n + ', you aren\'t old enough to view this page!')
    };
};
checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);
/* 8.    Write a function called checkAge that takes two arguments: one for a name and one for an age.
 If the age is less than 21, display an alert that says, "Sorry " + name + ", you aren't old enough to view this page!"*/

 let veggies = ['Carrots', 'Potatoes', 'Okra', 'Corn'];
for (i = 0; i < veggies.length; i++) {
    console.log(veggies[i])};
// 9.    Create an array of your favorite vegetables and name it accordingly.

let people = [
    { firstName: 'John', age: 24 },
    { firstName: 'Jane', age: 19 },
    { firstName: 'Garrett', age: 20 },
    { firstName: 'Nora', age: 19 },
    { firstName: 'Albert', age: 30 }
];
for (i = 0; i < people.length; i++) {
    checkAge(people[i].firstName, people[i].age)};
   /* 10.    Create an array of 5 objects that contain name and age properties.
     Make up names and ages for each object, making sure some are younger than 21 and some are 21+.*/

n = 'Hello World!'
function getLength(n) {
    return n.length
}
var world = getLength(n)
if (world % 2 == 0) {
    console.log('The world is nice and even!')
} else {
    console.log('The world is an odd place!')
};
// 11.    Create a function called getLength that takes any word as an argument. The function should return the number of characters in the string.
