/* eslint-disable react/prop-types */
  
  function SaPchild2(props) {
    return (
        <div
          style={{
            height: "50px",
            width: "100px",
            background: props.change.background,
            color: props.change.color,
            border: "1px solid black",
          }}
        >
          Child 2
        </div>
      );
  }
  
  export default SaPchild2