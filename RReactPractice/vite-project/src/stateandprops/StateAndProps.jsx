 
import { useState } from "react";
import SaPParent from "./SaPParent";
function StateAndProps() {
  const [change, setChange] = useState({
    background: "brown",

    color: "white",
    changed:false
  });
  
  const [change2, setChange2] = useState({
    background: "green",
    color: "white",
  });

  function changeFunction() {
    if(!change.changed){
    setChange({
      background: "blue",
      color: "black",
      changed:true
    });
  }else{
    setChange({
      background: "brown",
    color: "white",
    changed:false
    });
  }
  }
  

  function changeFunction2() {
    setChange2({
      background: "yellow",
      color: "black",
    });
  }
  return (
    <div>
      <SaPParent changeFunction={changeFunction} change={change} number={1} />
      <SaPParent changeFunction={changeFunction2} change={change2} number={2} />
    </div>
  );
}

export default StateAndProps