//!-----------------------------------------------------------------------------------------------------------
//MODULE-3-NOTES
//!-----------------------------------------------------------------------------------------------------------

import { useState } from "react";

// React Basics
// - Building Components
// - JSX & Babel
// - Adding Elements
// - Adding JS Expression
// - Attributes
// - Events
// - State
// - use State Hook
// - Handling Inputs
// - Mapping Lists

//Lecture-1-Setting Up a New React Project the Right Way
// - as name suggest basic react project setup with name => "dailytask"

//Lecture-2-Building Your First Reusable Component

// Component-Based Architecture
// - Break UI Into smaller,resuables pieces(Components)
// - Improve code resuability and maintainability
// - Example- Navbar,sidebar,ProductCard

// Naming Convential and file structure
// - Component name should be in PascalCase
// - src > Components > Card.jsx

//why jsx?
// -because we have to write js and html both so we use jsx and for typescript +html we write tsx

//Lecture-3-JSX & Babel: How They Work Together?
// Introducing the New JSX Transform(Ref this - https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html )

//BEFORE React 17: Full Flow
// 1️⃣ You write JSX: const element = <h1>Hello</h1>;
// 2️⃣ Babel converts it into:const element = React.createElement('h1', null, 'Hello');
// 2️⃣ You must import React in the file:import React from 'react';
// 4️⃣ React.createElement() returns a React Element(a plain JS object)Virtual DOM & Real DOM Update
// 5️⃣ React uses this element to build the Virtual DOM.
// 6️⃣ It compares with the previous Virtual DOM(Diffing).
// 7️⃣ Then it updates the Real DOM efficiently.
// 8️⃣ Finally, the browser renders plain HTML - <h1>Hello</h1>

// AFTER React 17: Full Flow(New JSX Transform)
// JSX Compilation & React Element Creation
// 1️⃣ You write the same JSX: ==> const element = <h1>Hello</h1>;
// 2️⃣ Babel now converts it into:
// import { jsx as _jsx } from 'react/jsx-runtime';
// const element = _jsx('h1', { children: 'Hello' });
// 3️⃣ No need to import React manually in the file.
// 4️⃣ _jsx() returns a React Element(like React.createElement used to).Virtual DOM & Real DOM Update
// 5️⃣ React takes the element and builds the Virtual DOM.
// 6️⃣ It compares with the previous Virtual DOM(Diffing).
// 7️⃣ Then it updates the Real DOM accordingly.
// 8️⃣ Finally, the browser renders plain HTML - <h1>Hello</h1>

//Lecture-4-Naming Conventions: CamelCase, PascalCase & Kebab-Case Simplified
// - In this lecture, I have covered the best practices and naming conventions we use when creating components. I’ve also shared the workflow before React 17 and how it changed after React 17.
//Camel Case: Writing phrases without spaces, where each word after the first one starts with a capital letter (like myVariableName).
// Kebab Case: Writing phrases all in lowercase, with words separated by hyphens (like my-variable-name).
// Pascal Case: Similar to Camel Case, but every word starts with a capital letter, including the first one (like MyVariableName).

//Lecture-5-React Fragments: Adding Elements Seamlessly
// - we see babel transpile in js code .but if you see then you will notice the code which converted its not pure js there many things which is not js
//- so at end of the day the many bundle(webpacks) which we use either is rollup,parcel..... are cpnverted them in js and putit on server
// Moving to react fragment
//- when we write jsx there is one rule we have to put multiple things then it must be in parent element means
const greet = () => {
  return (
    <div>
      <h1>hello</h1>
      <button>Childrean</button>
    </div>
  );
};
// -so when we transpile this code with babel it convert in js and js make object and accept childrean thats why we have one parent required
//- Now react internally gives us <React.Fragment></React.Fragment> or <></>. we can simply use it as parent and get rido unnecessary div

//Lecture-6-Using JavaScript Expressions Inside JSX
//- js code writes inside jsx
//- in js you can {2*3}, you make function ,variable all the things you do here same but above return which want declare
//- if you want cvalue in string then you have to use `-----${}` and $ for js expression before curly bracket

// Lecture-7-Setting Attributes Dynamically in JSX
//- in html element if we want to pass attributes
//- Attrivutes provide supporting role for any Tag/element

//!48 Lecture-9-Understanding State in React (with Examples)

// - in react nothing chnage directly in dom
// - first virtual dom made - actual dom copy => virtal dom
//- what chnage you made it happen in copy of virtual dom which is call new virtual dom
//- diffing algorithm see what is chnage between VDOM and New VDOM and that chnage made in Original DOM(BrowserDOM)
//- that Process called Reconciliation

//State in React
//- state allows us to manage and display chnaging data in our application.
//- when we use normal variable in react.they dont directly reflect changes in the DOM
//- State Variables,state is used to tell react,watch the variable and if it chnage then reflect on the DOM
//Note -for the v.DOM,How Changes in the V.DOM get Compared to the original DOM,and then updates are reflected on the actual DOM

//!49 Lecture-10-Introduction to React Hooks: The Functional Revolution
//- Hooks are functions that allows you use React features in functional Componenet
//- In Simple Words,Hooks are functions that make functional componments work like class component

//?Problem With Class Component ?
//? 1-Class Component Challneges:
//- Using Class components can be a bit  difficult because of this keyword confusion
//?2-Boilerplate Code
//- class coponents often require writing repetitive boilerplate code ,which can make the codebase lengthy and less maintable
//?3-Hooks Advnatgae:
//- with hooks functional components can now have state and other react features,making them just as powerfull as class components
//- but with a similar and more readable syntax

//!51 Lecture-12-Handling User Input in Forms & Events

//- here we make chnage in search componenet which is reflect on <h2>
//- here we see when on elatter type and vdom vs newvdom created and diffing and actual dom chnage .....
//- on every latter you write in searchbox the chnage reflect with efficent way

/*
const CreateTodo = () => {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");

    const handleClick = () => {
        setCount(count + 1);
    }

    const handleChange = (event) => {
        setInput(event.target.value)
    }
    return (
        <>
            <h1 className="btn">With State : {count}</h1>
            <input type="text" onChange={handleChange} />
            <button onClick={handleClick}>Add Task</button>
            <h2>{input}</h2>
        </>
    )
}
export default CreateTodo;

*/

//!52 Lecture-13-Rendering Lists Dynamically with Map function

//- with map we put list on react UI

//? key in react
//- key helps react identify which item have chnaged are remove or added

//?CODE
/*
const CreateTodo = () => {
    const tasks = ["Task1", "Task2", "Task3", "Task4", "Task5"]
    return (
        <>
            <ul>
                {
                    tasks.map((task) => <li key={task}>{task}</li>)
                }
            </ul>
        </>
    )
}
export default CreateTodo;

*/

//!53 Lecture-14- Web DevTools Deep Dive: Inspect to Network

//!54 Lecture-15-Mastering Props: Passing Data Between Components

//?Props
//- in react sharing data from one Components to another Components OR sharing data from Parent Components to child Components

//?Situation
//like DATA from A Components to B and B to C or C to D Components then you have to use Context API which we learn in hooks

//?Example
//here Card is Parent Components & UserCard is Child Components

//props gives data as object so we have to destructing them

//!FIRST WAY OF SYNTAX

//?PARENT COMPONENT
/*
import CreateTodo from "./create-todo"
import UserCard from "./UserCard";
const Card = () => {
    return (
        <>
            <h1>Hello Card Componenet</h1>
            <CreateTodo />
            <UserCard Name="Dipesh Joshi" Professional="Sodtware Engineer" />
            <UserCard Name="Hardik Joshi" Professional="Data Engineer" />
        </>
    )
}
export default Card;
*/

//?CHILD COMPONENT
/*
import React from "react";
const UserCard = (props) => {
    const { Name, Professional } = props;
    return (
        <div>
            <h3>{Name}</h3>
            <p>{Professional}</p>
        </div>
    )

}
export default UserCard

*/

//!SECOND WAY OF SYNTAX
//?CHILD COMPONENT
/*
import React from "react";
const UserCard = ({ Name, Professional }) => {
    return (
        <div>
            <h3>{Name}</h3>
            <p>{Professional}</p>
        </div>
    )

}
export default UserCard

*/

//?React rule says
//is whatever data trasfer its comes from parent to child means top to bottom

//?Not A Good Practise
// data whatever comes from parent please dont change in child component
// props are immutable .so please dont change
//?Example-1
// const UserCard = ({ Name, Professional }) => {
//     name = "maxi armani"
//     return (<div></div>)
// }

//?Recommanded Practise
//you can give any default value to props if not given as props
//- you can not pass name prop then what

//?Example
//?Parent
//  <UserCard Professional="Sodtware Engineer" />
//?Child
// const UserCard = ({ Name = "Dafult Name", Professional }) => {}

//?Recommanded Practise
//- but when you pass the valeu but its falsy value like null,empty,undefiend

//?Example
//?Parent
//  <UserCard Name="" Professional="Sodtware Engineer" />
//?Child
// const UserCard = ({ Name, Professional }) => {
//     const newName = Name || "Default Manager";
//     return (
//         <div >
//             <h3>{newName}</h3>
//             <p>{Professional}</p>
//         </div>
//     )
// }

//?Babel
//- when browser dont understand Es6 a mordern js then babbel transpile them into es5 .which browser understand
//- and when our jsx write babbel transpile into js but this is nor pure js
//- so we have bundler like vite,parcel which converted them into pure JS
