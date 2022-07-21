/***********************************************
 *               Function Basics               *
 ***********************************************/

// Let's start with 3 fundamental function types

// First, let's do the simplest form which takes
// no parameters and just *does* something.

function sayHello() {
  console.log("Hello there!");
}

sayHello();
console.log('Do something else here...');

sayHello(); // with the parenthesis, runs the function

// without parenthesis, it refers to the function itself
const greetMe = sayHello; 
greetMe(); // because greetMe = sayHello, this runs the function


// Second type is one that does something, but takes a parameter

function sayHelloToMe(firstName) {
  console.log("Hello there, " + firstName);
}

sayHelloToMe("Bridgette");
sayHelloToMe("Maria");
sayHelloToMe("Carla");
sayHelloToMe("Alicia");

const herName = 'Cassandra';

sayHelloToMe(herName);
sayHelloToMe(herName);
sayHelloToMe(herName);

// A third type of function calculates / returns something

function addTwoNums(a, b) {
  const sum = a + b; // 5 + 8 = 13
  return sum; // 13
}

const total = addTwoNums(5, 8); // 13

console.log(total);

console.log(addTwoNums(45, 60));
