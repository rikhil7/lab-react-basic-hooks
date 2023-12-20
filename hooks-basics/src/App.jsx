import React, { useContext, useState } from "react";
import "./App.css";
import Counter1 from "./Components/useState/Counter1";
import Counter2 from "./Components/useState/Counter2";
import Counter3 from "./Components/useState/Counter3";
import Counter4 from "./Components/useState/Counter4";
import Effect from "./Components/useEffect/Effect";
import ParentContext, { AppContext } from "./Components/useContext/ParentContext";
import Task from "./Components/task/task";

export default function App() {
  const [show, setShow] = useState(0);
  const {isDark,setIsDark} = useContext(AppContext)
  const render = () => {
    switch (show) {
      case 1:
        return (
          <>
            <Counter1 />
            <Counter2 />
            <Counter3 />
            <Counter4 />
          </>
        );
      case 2:
        return (
          <>
            <Effect />
            {/* <ParentContext /> */}
          </>
        );
        case 0:
        return (
          <>
            <Task />
          </>
        );
      default:
        return null;
    }
  }
  return (
    <div id="main">
      <div id="buttons">
        <button
          onClick={()=>{
            if(show<2){
              setShow(show+1)
            }else if(show==2){
              setShow(0)
            }
          }}
        >
          CHANGE
        </button>
        <button onClick={()=>{
          setIsDark(!isDark)
        }}>{isDark?"Light Theme":"Dark Theme"}</button>
      </div>

      {render()}
    </div>
  );
}
