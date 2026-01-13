//! Ternary Operator & Short - Circuiting 🚀

// Ternary Operator(? : )

//  ● A concise alternative to if...else statements.
//  ● Syntax: condition ? valueIfTrue : valueIfFalse
//  ● Returns one of the two expressions based on the condition.
//  ● Useful for inline decisions and UI logic.
//  ● Keeps code clean and readable when handling simple conditions.

//Example-ternary
// const age = 28;
// const category = age >= 18 ? "Adult" : "Minor";
// console.log(category); //Adult

//Example-if...else
const age = 16;
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// Short - Circuiting(|| and &&)

// || (OR Operator)

// ● Returns the first truthy value.
// ● Commonly used to assign default values.
// ● Skips evaluation of right-hand side if left is truthy.

// && (AND Operator)

// ● Returns the first falsy value(or last if all are truthy).
// ● Used for conditional execution.
// ● Skips evaluation of right - hand side if left is falsy.

// in js true = 1 and false = 0

//falsy value means we can OR Operator

const input = "" || "Default Value"; //?
console.log(input); //?Default

const isLoggedIN = true;
isLoggedIN && console.log("Welcome back"); //Welcome back

const isLoggedIN2 = false;
isLoggedIN2 && console.log("Welcome back"); //empty
