import React, { useContext, useRef, useState } from "react";
import CustomInput from "./CustomInput";
import { UserContext, useUserDetails } from "../../context/UserContext";

const Parent = () => {
  //   const {name , setName} = useContext(UserContext);
  //   const [name, setName] = useState("");
  const { name, setName } = useUserDetails();
  const inputEle = useRef("");
  console.log("inputRed", inputEle);

  return (
    <div>
      <h2>Hello : {name}</h2>
      <CustomInput ref={inputEle} changeName={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          inputEle.current.focus();
        }}
      >
        Focus
      </button>
      <button
        onClick={() => {
          inputEle.current.value = "";
          setName("");
        }}
      >
        Clear
      </button>
      {/* <button onClick={() => inputEle.current.focusInput()}>Focus Input</button>
      <button onClick={() => inputEle.current.clearInput()}>Clear Input</button> */}
    </div>
  );
};

export default Parent;
