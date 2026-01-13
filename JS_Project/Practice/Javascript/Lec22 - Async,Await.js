//! Aync and Await

//async / await:
//- This makes asynchronous code simpler and more readable.By adding the async keyword before a function,
//- you can then use the await keyword inside it, which pauses the execution until the promise is resolved, making the code look more like synchronous code.
//- async and await -> very easy to read nothing different

async function fetchUserData() {
  console.log("Fetching User Data");
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const user = await response.json();
    console.log("User Loaded", user.name);
  } catch (error) {
    console.log("failed to fetch our msg", error);
  } finally {
    console.log("request granted");
  }
}

fetchUserData();
