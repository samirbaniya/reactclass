import { useState } from "react";

function LimitedUsers() {
  const apiUrl = import.meta.env.VITE_BASE_URL;
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  async function fetchProducts() {
    try {
      const data = await fetch(apiUrl + "/users?limit=5");
      const finaldata = await data.json();
      setData(finaldata);
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setError("Error fetching data");
    }
  }
  const users = data.map((user) => (
    <div style={{ border: "1px solid black", margin: "10px" }} key={user.id}>
      <p>id:{user.id}</p>
      <p>username:{user.username}</p>
      Address:<p>lat:{user.address.geolocation.lat}</p>
      <p>long:{user.address.geolocation.long}</p>
      <p>city:{user.address.city}</p>
      Name:<p>firstname:{user.name.firstname}</p>
      <p>lastname:{user.name.lastname}</p>
      <p>Phone:{user.phone}</p>
    </div>
  ));
  return (
    <>
      <div style={{ color: "red" }}>{error}</div>
      {users}
      <button onClick={fetchProducts}>Limited Users</button>
    </>
  );
}

export default LimitedUsers;
