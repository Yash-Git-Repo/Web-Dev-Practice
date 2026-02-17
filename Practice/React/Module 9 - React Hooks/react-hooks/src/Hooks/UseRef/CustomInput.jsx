import React, { forwardRef, useImperativeHandle, useRef } from "react";

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();

    useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current.focus();
    },
    clearInput: () => {
      inputRef.current.value = "";
    }
  }));

  return (
    <div>
      <input type="text" placeholder="ForwardRef example" ref={ref} onChange={props.changeName} />
      <input type="text" placeholder="useImperativeHandle example"ref={inputRef} onChange={props.changeName} />
    </div>
  );
});

export default CustomInput;
