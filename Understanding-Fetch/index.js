//* Now what we will do is send a call to an API

// fetch("https://api.adviceslip.com/advice")
//   .then((result) => console.log(result)
//*1. See on the console it will give us a response in JSON format

//*2. Now the data I got, if I do (result.json) like this, let’s see what happens...
//   .then((result) => result.json())

//*3. On the console it shows => Promise { <pending> }, which means it returned a promise.
// So now I will consume it again, and I will tell it that I want the data inside it, so...
//   .then((data) => console.log(data));

//*4. Now see the console,
// {
//   slip: {
//     id: 94,
//     advice: "Sometimes, you just need to say sorry. Even if it's not your fault."
//   }
// }
//* ==> It returned the data.. In this data there is some text written.
// We want that when we press the button on the browser,
// it will generate the same text on the console. Let’s see how..

const button = document.querySelector("button");
const header = document.querySelector("h1");

button.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((result) => result.json())
    // .then((data) => console.log(data));
    .then((data) => {
      console.log(data.slip.advice);
      header.innerText = data.slip.advice;
    });
});
