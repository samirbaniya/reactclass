import { useState } from "react";

function SingleUser() {
  const apiUrl = import.meta.env.VITE_BASE_URL;
  const [error, setError] = useState(null);
  const [data, setData] = useState({});
  async function fetchProducts() {
    try {
      const data = await fetch(apiUrl + "/users/1");
      const finaldata = await data.json();
      setData(finaldata);
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setError("Error fetching data");
    }
  }
  const users =
    Object.keys(data).length > 0 ? (
      <div style={{ border: "1px solid black", margin: "10px" }}>
        <p>id:{data.id}</p>
        <p>username:{data.username}</p>
        Address:<p>lat:{data.address?.geolocation.lat}</p>
        <p>long:{data.address?.geolocation.long}</p>
        <p>city:{data.address?.city}</p>
        Name:<p>firstname:{data.name?.firstname}</p>
        <p>lastname:{data.name?.lastname}</p>
        <p>Phone:{data.phone}</p>
      </div>
    ) : null;

  return (
    <>
      <div style={{ color: "red" }}>{error}</div>
      {users}
      <button onClick={fetchProducts}>Single User</button>
    </>
  );
}

export default SingleUser;
