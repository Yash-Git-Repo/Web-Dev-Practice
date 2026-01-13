// Array Mastery: Must-Know Methods
//  find() --> Returns the first element that satisfies a condition.(or undefined if not found)
//  findIndex() --> Returns the index of the first element that satisfies a condition.(or -1 if not found)
//  map() --> //- Applies a function to each element and returns a new array.
//  filter() --> Selects elements based on a condition and returns a new array.
//  join() --> Joins all elements of an array into a single string.
//  split() --> Splits a string into an array of substrings.
//  reduce() --> Reduces the array to a single value by applying a function cumulatively.

const users = [
  { id: 1, name: "John Doe", age: 28, price: 100 },
  { id: 2, name: "Emma Stone", age: 22, price: 200 },
  { id: 3, name: "Max", age: 19, price: 300 },
  { id: 4, name: "Oliva Smith", age: 31, price: 500 },
];

//Example-1 (Reduce)
const total = users.reduce((sum, item) => sum + item.price, 0);
console.log(total); //1100

//Explanation
// - here loop run like this at start it sum value is 0 then
// - first item came 0+100 = 100 and sume value is 100
// - second item came 100+200 = 300 and sume value is 300
// - third item came 300+300 = 600 and sume value is 600
// - fourth item came 600+500 = 1100 and sum value is 1100(final answer)

//2Example-1 (find)
const name = users.find((user) => user.age > 20);
console.log(name); // { id: 1, name: "John Doe", age: 28 },

//?Example-1 (findIndex)
const nameIndex = users.findIndex((user) => user.age > 20);
console.log(nameIndex); //0

//Example-2
// const nameIndex2 = users.findIndex(user => user.name === "Emma Stone");
// console.log(nameIndex2); //1

//Example-3
// const nameIndex3 = users.findIndex(user => user.name === "GRACY");
// console.log(nameIndex3); // -1

//Example-1(map)
// const names = users.map((users) => {
//   return users.name;
// });
// console.log(names);

//Example-2
// const upperCaseNames = users.map((users) => {
//     return users.name.toUpperCase();
// });
// console.log(upperCaseNames); //["JOHN DOE","EMMA STONE","MAX","OLIVA SMITH"]

//Example-1(filter)
// const age = users.filter(user => user.age > 20);
// console.log(age);
// [
//     { id: 1, name: "John Doe", age: 28 },
//     { id: 2, name: "Emma Stone", age: 22 },
//     { id: 4, name: "Oliva Smith", age: 31 }
// ]

//Method Chaining

//Example-1 use of map and filter

// const result = users.filter(user => user.age > 20).map(user => user.name.toUpperCase());
// console.log(result);//["JOHN DOE","EMMA STONE","OLIVA SMITH"]

// Example - 1(join);
const names = users.map((user) => user.name.toUpperCase());
const nameString = names.join(",");
console.log(nameString); //JOHN DOE,EMMA STONE,MAX,OLIVA SMITH

//Example-2- map,filter and join
// const nameArray = users.filter(user => user.age > 20).map(user => user.name.toUpperCase()).join(",");
// console.log(nameArray);//JOHN DOE, EMMA STONE, OLIVA SMITH

//Example-1(split)
// const names = users.map(user => user.name.toUpperCase());
// const nameString = names.join(",");
// const nameArray = nameString.split(",");
// console.log(nameArray);// ["JOHN DOE","EMMA STONE","MAX","OLIVA SMITH"]
