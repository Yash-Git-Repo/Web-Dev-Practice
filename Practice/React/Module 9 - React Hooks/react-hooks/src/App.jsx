import { useState } from "react";
import ClassComponent from "./ReactLifeCycle/ClassComponent";
import { FunctionalComponent } from "./ReactLifeCycle/FunctionalComponent";
import MyStateComponent from "./Hooks/UseState/MyStatecomponent";
import MyUseEffect from "./Hooks/UseEffect/MyUseEffect";
import MyUseRef from "./Hooks/UseRef/MyUseRef";
import Parent from "./Hooks/UseRef/Parent";
import { UserContext, UserContextProvider } from "./context/UserContext";
import Counter from "./Hooks/UseReducer/Counter";
import User from "./Hooks/UseReducer/User";
import UseMemo from "./Hooks/UseMemo/UseMemo";
import UseId from "./Hooks/UseId.jsx/UseId";
import MyUseTranslation from "./Hooks/useTranslation/MyUseTranslation";

function App() {
  const [show, setShow] = useState(true);
  const [name, setName] = useState("Bambu");
  return (
    <>
      <h2>App Component</h2>
      {/* <ClassComponent /> */}
      {/* <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Toogle Component
      </button>
      {show && <FunctionalComponent />} */}
      {/* <MyStateComponent /> */}
      {/* <MyUseEffect /> */}
      {/* <MyUseRef /> */}
      {/* <UserContextProvider userDetails={{ name, setName }}>
        <Parent />
      </UserContextProvider> */}
      {/* <Counter />
      <User /> */}
      {/* <UseMemo /> */}
      {/* <UseId /> */}
      <MyUseTranslation />
    </>
  );
}

export default App;
