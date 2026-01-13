// Example 1
// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout");
// }, 2000);

// Promise.resolve("Promise Resolved").then((res, err) => {
//   console.log(res);
// });

// console.log("end");

// Execution & Explanation :
// Step-by-step:

// Prints "Start" (sync)
// setTimeout registers timer in Web API -> goes to macrotask queue
// Promise is resolved → its .then goes to microtask queue
// Prints "End" (sync)
// Call Stack empty → drain microtasks first → prints Promise "Resolved"
// MicroTask empty -> drain macrotask ->Event loop picks it → prints "Timeout"

// Example 2
// console.log("Order Recevied");

// setTimeout(() => {
//   console.log("Pizza is Ready");
// }, 2000);

// fetch("https://dummyjson.com/products/1").then(() =>
//   console.log("API repsonse recevied")
// );

// Promise.resolve().then(() => console.log("Quick Billing Done!"));

// console.log("serving Water");

//Explanation -
// Order of fetch() and Promise will depend on FIFO ( first in first out)
