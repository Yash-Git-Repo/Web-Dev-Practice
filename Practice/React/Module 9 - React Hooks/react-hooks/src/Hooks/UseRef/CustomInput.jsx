import React, { forwardRef, useImperativeHandle, useRef } from "react";

const CustomInput = forwardRef((props, ref) => {
  const inputEle = useRef();

  //   useImperativeHandle(ref, () => ({
  //   focusInput: () => {
  //     inputEle.current.focus();
  //   },
  //   clearInput: () => {
  //     inputEle.current.value = "";
  //   }
  // }));

  return (
    <div>
      <input type="text" placeholder="ForwardRef example" ref={ref} onChange={props.changeName} />
      {/* <input type="text" placeholder="useImperativeHandle example"ref={inputEle} onChange={props.changeName} />    */}
    </div>
  );
});

export default CustomInput;
