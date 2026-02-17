import React, { useState } from "react";
import { loginUser } from "../api/user";

const Login = () => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const [isPending, setIsPending] = useState(false);

  function handleSubmit(e) {
    console.log('target',e.target);
    
    e.preventDefault();
    setIsPending(true);
    setError("");
    setUser("");

    const formDate = new FormData(e.target);
    const email = formDate.get("email");
    const password = formDate.get("password");

    const result = loginUser(email, password);

    result
      .then((response) => {
        setIsPending(false);
        setUser(response.data);
      })
      .catch((error) => {
        setIsPending(false);
        setError(error.error);
      });
  }

  return (
    <>
      <h1>React19 Hooks</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" required />
        </div>
        <button type="submit" disabled={isPending}>
          {isPending ? "Logging in..." : "Login"}
        </button>
        {user && <p style={{color: "green"}}>Logged in as {user.email} </p>}
        {error && <p style={{color: "red"}} >{error}</p>}
      </form>
    </>
  );
};

export default Login;
