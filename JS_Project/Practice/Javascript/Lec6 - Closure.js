//# Closure in js
//- A closure is a function that has access to its own scope, the outer function's scope, and the global scope.
//- Closures are created every time a function is created, at function creation time.
//- Closures allow functions to have private variables and maintain state across invocations.
//- In simple terms, a closure means that an inner function can remember and use variables from its outer function even after the outer function has finished executing.
//- closure is a powerful feature in JavaScript that allows functions to have access to variables from their outer (enclosing) scope, even after that outer function has finished executing.
//- This is particularly useful for creating private variables and functions, as well as for maintaining state in asynchronous operations.
//- Lexical scope means that a function remembers the environment in which it was defined, including all the variables in that scope.

function counter() {
  let count = 0;

  return function incrementCount() {
    count++;
    return count;
  };
}
const count1 = counter();
console.log(count1()); //1
console.log(count1()); //2
console.log(count1()); //3

// Explanation
// counter() returns a function
// That returned function closes over (remembers) the variable count
// Even after counter() finishes execution, count stays in memory
// Every time count1() is called:
// It uses the same remembered count
// Increments it by 1
// Returns the updated value
// “This works because of closure: the returned function retains access to count from its lexical scope and updates the same variable on every call.”
