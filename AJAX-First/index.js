//* AJAX Asynchronous JavaScript And XML
//! What is Asynchronous JavaScript
//! Why do we use Asynchronous JavaScript

//! Now we understand the functionality of this, how it actually works
// JavaScript reads code line by line. When JS reads the code,whenever he see the function they envoke/execute it there
//*1. We make a console.log start

// console.log("Start");

// function otherFunction() {
//   console.log("We are in another function");
//   console.log("Do some stuff");
// }

// otherFunction();

// console.log("end");

//! Now we understand the Asynchronus function

console.log("Start");

// function otherFunction() {
//   console.log("We are in another function");
//   console.log("Do some stuff");
// }

// otherFunction();

setTimeout(() => {
  console.log("We are in time out");
}, 2000);

console.log("end");

//* so see on console, first (start) display, then (end) display and after 2 seconds (we are in timeout) display on the console of the browser... So, this is how an asynchronous function works… As I said before, JavaScript reads code line by line. When it starts reading and comes across a setTimeout function, JavaScript doesn’t stop there. It puts that line aside (in waiting) and moves on to the next line and executes it. Once the 2 seconds are complete, JavaScript comes back to that line and executes it at the end.

//? Is Javascript is a single-threading or multi-threading programing language?
//* JAvascript is a single-thread programing language, it reads code line by line
