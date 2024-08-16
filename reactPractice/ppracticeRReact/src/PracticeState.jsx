import { useState } from "react";

function PracticeState() {
  const [state, setState] = useState(1);
  const [check, setCheck] = useState(true);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const crossCheck = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.address.value);


  };

  const count = () => {
    setCheck(!check);
    setState(state + 1);
  };
  return (
    <div>
      {check && <button onClick={count}> {state}</button>}
      <form onSubmit={crossCheck}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>The name is {name}</p>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <p>The address is {address}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PracticeState;