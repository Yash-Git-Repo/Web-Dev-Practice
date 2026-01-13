console.log("closure in javascript");

//function call main jo parameter varaibles ho we cant repeat but with the closure we can acheive that state
//calling function in the function
//in closure function value does not lost

//what is lexical scope?
// acess the value of a and b from the function c's value is right there then it take and its calls then sum

//Example-1
/*
var sum = function (a) {
  console.log("Live Viewers " + a);
  var c = 4;
  return function (b) {
    return a + b + c;
  };
};
var store = sum(200);
console.log(store(5));
*/


//in other language you cant be store the function variables and value but in js you can retain ur values
//normal call => function call then va;ues dont eatin but here it does

// var sum = function (a, b, c) {
//   return {
//     getSumTwo: function () {
//       return a + b;
//     },
//     getSumThree: function () {
//       return a + b + c;
//     },
//   };
// };
// var store = sum(3, 4, 5);
// console.log(store.getSumTwo());
// console.log(store.getSumThree());

// var store1 = sum(10, 20, 30);
// console.log(store1.getSumTwo());
// console.log(store1.getSumThree());



//?-------------------------------------------Closure from Akshay Saini----------------------------------

//?Ex-1

// function x() {
//   var x = 7;
//   function y() {
//     console.log(x);
//   }
//   y()
// }
// x(); //?7

//- A function with combined environment of that function outer state or you can say lexcial state that is called closure

//?Ex-2

// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }
// const z = x()
// console.log(z); // whole body of y + the lexcial scope of y means x's scope varible which is a = 7;
// //?----THousand lines of code here
// z();

//- so closure so powerful when y returns it the body x will be gone from execution context still y carries the body of our own and returns the lexcial scope where a = 7 is store

//?Ex-3

// function z() {
//   var b = 900;
//   function x() {
//     var a = 7;
//     function y() {
//       console.log(a,b);
//     }
//     y()
//   }
//   x()
// }
// z();

//even in the deepest scope chain in js  the closure will form  and closure is function + lecial scope 

//- here a with closure of x and b with closure of z


//?Uses

//- module design pattern in closure
//- currying in js closure is usefull
//- memoize
//- function which called once where closure

// - manage state in async world
//- setTimeouts
//- iterators