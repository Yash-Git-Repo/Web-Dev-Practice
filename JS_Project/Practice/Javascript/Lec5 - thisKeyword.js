// Understanding this in JavaScript: Normal vs Arrow Functions (Deep dive into this keyword)

//main objective of function - to resuse or reuse with different value at different place

//1. Normal Functions and this:
//In normal functions, the this keyword refers to the object that calls the function, allowing access to the object’s properties.

//2. Arrow Functions and Lexical this:
//Arrow functions do not have their own this.Instead, they inherit this from their surrounding scope, which means they look to the outer context for this.

//3. Global Context:
//In a browser environment, the outer context is typically the window object, while in Node.js, it is the global object.

//4. No this in Arrow Functions:
//Because arrow functions do not have their own this, you cannot use this to access properties within them.

//Windows vs Global Object
// Browser :
//- In a browser, the global object is the window object,
//- varible declare with var in the global scope become properties of the window .
//- while those declared with let or const will not be attached to the window object and will not be globally accessible.

//Node.js:
//- In Node.js, the global object is simply called global, and it serves a similar purpose.
//- Variables declared with var in Node.js will be not attached to the global object,
//- while those declared with let or const will not be attached to the global object and will not be globally accessible.
//- only var delcared Varaibles will be part of window in browser

//Questions1 : arrow function look clean but they always behave same as normal function
// Arrow functions do not behave the same as normal functions when it comes to the this keyword.
// They inherit this from their surrounding context, while normal functions have their own this based on how they are called.
// This means that in arrow functions, you cannot use this to access properties of the object that calls the function, which is a key difference from normal functions.

// Question 2: how does normal function behave inside arrow function
// Answer:
// Inside an arrow function, a normal function will still behave as it normally does.
// If you call a normal function within an arrow function, the this context of the normal function will depend on how it is called. If it is called as a method of an object, this will refer to that object.
// If it is called in the global context, this will refer to the global object (window in browsers, global in Node.js).

//Normal Function
// function greet() {
//     console.log("Hello Normal")
// }
// greet(); //Hello Normal

//Arrow Function
// const greetArrow = () => {
//     console.log("Hello Arrow")
// }
// greetArrow(); //Hello Arrow

//shorter Arrow Function
// const greetShort = () => console.log("Hello Short Arrow");
// greetShort(); //Hello Short Arrow

// const greetWithName = () => "Yash Shivhare";  //here in syntax return is not required
// var Arrowname = greetWithName();
// console.log(Arrowname); //Yash Shivhare

//Example1  -> this behaviour in arrow and normal function (IN OBJECT)
// const user = {
//   name: "Yash",
//   age: 28,
//   greet: function () {
//     console.log(console.log(`Hello ${this.name} , age : ${this.age}`));
//   },
// };
// user.greet(); //Hello Yash , age : 28

// Example-2 -> this behaviour inarrow function (IN OBJECT)
// fname = "Yash ";
// {
//   fname: "Bahubali";
// }
// const user2 = {
//   fname: "Dipesh Joshi",
//   greetNormal: () => {
//     console.log("Hello from arrow function", this.fname);
//   },
// };
// user2.greetNormal(); // Hello from arrow function Yash   ----- > Here ,arrow fn will read this from its surrounding object (which is of user2 and scope of user 2 is globlal), and fname is declared globally as no let,var,const have been used .

// Example-3
// let fname = "Yash ";
// {
//   fname: "Bahubali";
// }
// const user2 = {
//   fname: "Dipesh Joshi",
//   greetNormal: () => {
//     console.log("Hello from arrow function", this.fname);
//   },
// };
// user2.greetNormal();// undefined  ----- > let does not create properties on the global object, and arrow functions read this from the surrounding scope, not from the object.

// Example-4
// const user = {
//   fname: "Yash",
//   greet() {
//     console.log("Outer this:", this.fname);

//     const innerArrow = () => {
//       console.log("Inner arrow this:", this.fname);
//     };
//     innerArrow();
//   },
// };
// user.greet(); // Outer this: Yash
// Inner arrow this: Yash
//Explanation --->greet() reads this from user and innerArrow() is called inside greet() Arrow function → inherits `this` from greet() (i.e from user only)
// -------------------------------------------------------Extra-----------------------------------------------

//this behaviour in Arrow and Normal function (WITHOUT OBJECT)

//Example-1
// var name = "Dipesh Joshi";
// function sayHi() {
//     name = "Hardik Joshi";
//     console.log("Hi from normal function", this.name);
// }
// sayHi() // Hi from normal function undefined .
// Explanation ----> this in a normal function (non-arrow) depends on how the function is called.
// Since you're calling sayHi() in the global context, in a browser, this refers to the window object.

// var name = "Dipesh Joshi";
// This makes a global variable, and in browsers, var-declared globals also become properties on window:
// window.name === "Dipesh Joshi" // true
// So unless you overwrite it with something like:
// this.name = "Something";
// this.name is "Dipesh Joshi".
// But if you are running this outside a browser(like Node.js), this in a regular function doesn't refer to the global object. Hence, you may see:undefiend

//Example-2
// var name = "Dipesh Joshi";
// const sayHello = () => {
//     var name = "xyz"
//     console.log("Hi from arrow function", this.name);
// }
// sayHello() //Hi from arrow function undefiend

//Explanation
//- Arrow functions do not have their own this.
//- They inherit this from the enclosing scope(also known as lexical scoping).
//- So if the enclosing scope is global(and in a browser), then:
// this === window
// this.name === "Dipesh Joshi"
//- In Node.js, this at the top level is not the global object, so this.name would be undefined.
