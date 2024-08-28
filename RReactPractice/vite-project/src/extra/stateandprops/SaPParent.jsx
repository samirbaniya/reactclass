/* eslint-disable react/prop-types */

import Sapchild1 from "./Sapchild1";
import SaPchild2 from "./SaPchild2";

  
  function SaPParent(props) {
    return (
        <div style={{ display: "flex", gap: "50px" }}>
          Parent Number : {props.number}
          <Sapchild1 changeFunction={props.changeFunction} />
          <SaPchild2 change={props.change} />
        </div>
      );
  }
  
  export default SaPParent