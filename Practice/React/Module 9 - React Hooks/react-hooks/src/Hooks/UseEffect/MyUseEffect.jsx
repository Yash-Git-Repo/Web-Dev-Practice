import React, { useEffect, useLayoutEffect, useState } from "react";

const MyUseEffect = () => {
const [ width , setWidth] = useState(300)
  console.log("Rendering");

  useLayoutEffect(() => {
    console.log("Hello useEffect",width);
    setWidth(600)
  },[width]);

    return (<div style={{
      width: `${width}px`,
      height: "300px",
      backgroundColor: "lightblue",
      border: "2px solid black"
    }}>MyUseEffect</div>);
};

export default MyUseEffect;
