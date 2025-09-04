//! Let's what happen when we use for each method..

// console.log("Start");

// function otherFunction() {
//   console.log("We are in another function");
//   console.log("Do some stuff");
// }

// otherFunction();

// setTimeout(()=> {
//  console.log("We are in timeout")
// }, 2000)

// console.log("end");

// const items = [1,2,3,4]
// items.forEach(i => console.log(i))

// So here same scenario happens, first (start) display, then (end) display, then (number of arrays) display, after at the end setTimeout function runs and display on the console of the browser.

//! Abhi hamny bat karni hai ky hmny server se data kaise lena ha
//? How to get data from server? (server is our computer where our data save)
//*1. There is a problem when we write code synchronously

console.log("Start");

// function otherFunction() {
//   console.log("We are in another function");
//   console.log("Do some stuff");
// }

// otherFunction();
function logInUser(email, password) {
  setTimeout(() => {
    //*5 Abhi yaha pr ek or masla hai, wo yeh ky jab js code ko read karta hai, usy pehla line (start) ka mila usny display kardia, phir usko (end) dikha usny usy display kardia, phir usko return mila usny udr hi undefined de dia, Wo kiu ab dekhty hai {isko (console.log(user) undefined de rha hai, kiu ky usy value hi nhi mil pati jab wo code ko upr se nichy read karta ha} To iska hal yeh hai ky hmny isko callback function pass karna hai, or wo callback function kia karega? wo khud ko call karega jb setTimeOut ka time pura hojaye...

    //*3. To hmy istrah ka data nhi milta jaisy ye userEmail hai

    return { userEmail: email };
  }, 1500);
}

//*4. Let's say, mainy ek variable lagaya USERS ky name se or usky mny logInUser pass kia or us LogInUser ko mny provide kia ek email (shery@gmail.com) or phir mny password dia (1234)
const user = logInUser("sherry@gmail.com", 1234);
console.log("end");

//*2. Acha ab kahani ye hai, hmy nhi pata hota ky ham jab kaam kar rahy hoty ha API's ky sath, to hmy pata nhi hota ky hamara server kitna time lagayega

////////////////////////////////////////////////////////////////

console.log("Start");

// function otherFunction() {
//   console.log("We are in another function");
//   console.log("Do some stuff");
// }

// otherFunction();

//*6. To callback funtion as a parameter pass hoga, joky execute hoga baad me..
function logInUser(email, password, callback) {
  setTimeout(() => {
    //*8. or yahan return ki jgah callback use kedrngy
    //// return { userEmail: email };
    callback({ userEmail: email });
  }, 1500);
}

//*10. Abhi like maan lo ye ek youtube account hai na, to hmny pehly login kia baad me hmy videos bhi chahye to usky liye ek or function bnayengy..

function getUserVideos(email, callback) {
  setTimeout(() => {
    callback(["video1", "video2", "video3"]);
  }, 1000);
}

//*12. Next ab mny is videos ki details nikalni hai to wo kuch esy karengy...
function videoDetails(video, callBack) {
  setTimeout(() => {
    callBack("Title of the video");
  }, 2000);
}

//*7. or yaha pr bhi pass krdengy
const user1 = logInUser("sherry@gmail.com", 1234, () => {
  //*9. or phir console kara dengy user ko
  console.log(user1);
  //*11. Jab user login ho jayega to uski videos bhi ajani chahye.. right...to kuch u karngy phir...

  getUserVideos(user.userEmail, (video) => {
    console.log(video);
    videoDetails(video[0], (title) => {
      console.log(title);
    });
  });
});
console.log(user1);
console.log("end");

//!Note:
//* Agr tumny kuch note kia ho ky pehly, waha pehly mujhy user mila, phir user ki hmy videos chahye thi to uper walay function ky params me user pass karky us se videos nikalwayii, phir usi videos ki hmy details chahye thii to videoDetails ky function ky params me hmny video pass kia to hmy usky accordingky details mil gayiii...
