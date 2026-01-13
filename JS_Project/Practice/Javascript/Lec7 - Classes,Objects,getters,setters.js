//# Classes, Objects, and Getters/Setters in Javascript
// 1. Class & Object:
// A class is like a blueprint for creating objects.
// An object is an instance of a class, meaning it’s a specific item created using that blueprint.

//2. Constructor:
// The constructor is a special method in a class that gets called when you create a new object.It initializes the object’s properties.

//  3. Getters and Setters:
// Getters are methods that allow you to access(or “get”) the value of a property.
// Setters are methods that let you update (or “set”) the value of a property with some added logic, like validation.

// 4. Purpose of this:
// The keyword this refers to the current object instance.It’s used to assign or access the properties of that particular object.

// 5. Underscore _ Convention:
// Using an underscore(like _name) is a common practice to show that a property is meant to be private or internal.It helps indicate that this property shouldn’t be accessed directly from outside the class.

// EXAMPLE
// class Person {
//   constructor(name) {
//     this._name = name;
//   }
// }
// const person = new Person("Yash"); //?object creation using the Person class.
// console.log(person.name); //undefined
// console.log(person._name); //Yash
// // Output: Ajay

// person._name = "Bahubali";
// console.log(person._name); // Bahubali

//- this is not good practice, we should use getters and setters to access and modify properties

// Getters and Setters
//- the benefit of using getters and setters is that we can add validation or other logic when getting or setting a property
//- we can also use getters and setters to make properties read-only or write-only ||  private or protected
//- other developers can use the class without needing to know the internal details of how it works

// EXAMPLE
// class Person {
//   constructor(name) {
//     this._name = name;
//   }

//   get name() {
//     return this._name;
//   }

//   set newName(newName) {
//     if (newName) {
//       this._name = newName;
//     } else {
//       console.log("New name not found");
//     }
//   }
// }

// const person = new Person("Yash");
// console.log(person); //creates object with key-value pair" Person = {_name: 'Yash'}"
// console.log(person.name); //Accesing name with getter
// person.newName = "Bahubali"; //using setter to set new name
// console.log(person.name); //Accesing name with getter
