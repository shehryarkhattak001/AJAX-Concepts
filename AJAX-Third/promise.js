//! Promise
//* Just an object, give us back either a result of asynchronous operator
//* -or a failure of an asynchronous operator
//* -as we do in callback

//! Why we use promise instead of callback
//* Callback hell ka problem kya tha?
// Jab hume ek ke baad ek kaam karne hote (jaise: pehle data lo → phir process karo → phir save karo), to har kaam ke liye callback banani parti thi.
// Yeh callbacks ek doosre ke andar ghusti rehti thi (nested), aur code bohot lamba, ganda aur samajhna mushkil ho jata tha. Isko hi callback hell kehte hain.
//* Promise kyun use karte hain?
// Promise se code clean aur readable ho jata hai.
// Nested code ki jagah, yeh ek simple chain bana deta hai (.then() aur .catch() se).
// Error handle karna asaan ho jata hai.
// Flow samajhna simple ho jata hai — kaunsa kaam kab hoga, clearly dikhta hai.

//*1. Promise ek object hai or ye do parameter leta {Resolve, Reject}.. Success hoga to resoleve, failure hoga to reject
//*2. Let's make a promise

//! Promise Creation
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Got it");
    //* 4. Main kia karta hu, resolve ki jagah reject kar deta hu like
    reject(new Error("User not logged in"));
    // resolve({ user: "sherry" });
  }, 2000);
});
//// ya phir ye
//// }).then();

//*3. Another step we've to consume it execute the code.
//* When we try to get back the information

//! Consume Promise

//// ya phir ye
promise
  .then((user) => {
    console.log(user);
    //*5. Error ko mai catch bhi karskta hu
  })
  .catch((err) => console.log(err.message));

// new keyword do 3 things.
// 1 Create empty object {}
// 2 Point the construtor properties or methods to the empty object
// 3 Return that object

function logInUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Now we have the data");
      resolve({ userEmail: email });
    }, 3000);
  });
}

logInUser("sherry@gmail.com", 123)
  .then((user) => console.log(user))
  .then((user) => getUserVideos(user.email))
  .then((videos) => videoDetails(videos[0]))
  .then((detail) => console.log(detail));
