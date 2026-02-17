import React, { useEffect, useState } from "react";

export const FunctionalComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("UseEffect : Mounting");
  }, []);

  useEffect(() => {
    console.log("UseEffect : re-rendering");

    return () => {  
        console.log("UseEffect : Unmounting");  
    }
  }, [count]);

  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={() => setCount(count + 1)}>Add by 1</button>
    </div>
  );
};
