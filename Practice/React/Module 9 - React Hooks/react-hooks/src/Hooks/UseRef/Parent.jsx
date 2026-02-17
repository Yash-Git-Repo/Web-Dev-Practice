import React, { useContext, useRef, useState } from "react";
import CustomInput from "./CustomInput";
import { UserContext, useUserDetails } from "../../context/UserContext";

const Parent = () => {
  //   const {name , setName} = useContext(UserContext);
  //   const [name, setName] = useState("");
  const { name, setName } = useUserDetails();
  const inputRef = useRef("");
  console.log("inputRed", inputRef);

  return (
    <div>
      <h2>Hello : {name}</h2>
      <CustomInput ref={inputRef} changeName={(e) => setName(e.target.value)} />
      <button onClick={() => inputRef.current.focus()}>Focus Input </button>
      <button onClick={() => setName("")}>Clear Input</button>
      <button onClick={() => inputRef.current.focusInput()}>Focus Input</button>
      <button onClick={() => inputRef.current.clearInput()}>Clear Input</button>
    </div>
  );
};

export default Parent;
