import React, { useReducer } from "react";

const initialState = { name: "", email: "", age: "" };
function reducer(state, action) {
  switch (action.type) {
    case "Updated Field":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

const User = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleSubmit(e) {
    e.preventDefault();
    alert("Form Submitted");
    console.log("formData",state);
    
  }

  function handleChange(e) {
    dispatch({
      type: "Updated Field",
      field: e.target.name,
      value: e.target.value,
    });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={state.name}
          placeholder="Enter Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          value={state.email}
          placeholder="Enter Email"
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          value={state.age}
          placeholder="Enter Age"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
        <button type="reset" onClick={() => dispatch({ type: "RESET" })}>
          Reset{" "}
        </button>
      </form>
    </div>
  );
};

export default User;
