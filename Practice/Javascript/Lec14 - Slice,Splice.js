//#Slice and Splice

//slice() -
// It is used to take out a portion of an array.
// It does not change the original array.
// It takes two values: start position and end position.
// It returns a new array from the given start to end(end is not included).

//splice() - It is used to add or remove elements in an array.
// It changes the original array.
// It can remove elements from any position.
// It can also insert new elements at any position.
// Used when you want to modify the array.

//slice()
//-gives a portion of an array  as a new  array without changing the original

//splice()
//-adds,remove or replaces elements in the array by modifying the original.

//use of method
//When you call network api and its give reponse and you want to slice
//chnaging value in array

//How the inclusive and Exclusive work
// any range value the start point is always inclusive and last point is always exclusive in slice only
// in splice all are inclusive
// means start from 2 to end at 8 => 2 is include and 8 is not means => 2,3,4,5,6,7

//?Example-1
let items = ["Pen", "Pencil", "NoteBook", "Eraser", "Sharpener"];

// let items1 = items.splice(2, 1);
// console.log(items1); // ["NoteBook"]
// console.log(items); // ['Pen', 'Pencil', 'Eraser', 'Sharpener']

//ADD
// console.log(items); // [['Pen', 'Pencil', 'NoteBook', 'Eraser', 'Sharpener']
// items.splice(1, 0, "Marker");
// console.log(items); // ['Pen', 'Marker', 'Pencil', 'NoteBook', 'Eraser', 'Sharpener']
// items.splice(1, 2, "whitener");
// console.log(items); // ['Pen', 'whitener', 'NoteBook', 'Eraser', 'Sharpener']

//Example-2
let cart = ["Milk", "Bread", "Butter", "Eggs", "Juice"];
let prview = cart.slice(1, 3); //start from 1, End at before 3 means 2
console.log(cart); //?Output- ["Milk", "Bread", "Butter", "Eggs", "Juice"];
console.log(prview); //?Output- [ "Bread", "Butter"];
