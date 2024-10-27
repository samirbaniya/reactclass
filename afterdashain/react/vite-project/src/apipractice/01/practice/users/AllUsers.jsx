import { useEffect, useRef, useState } from "react";
import ErrorPage from "../../../components/ErrorPage";
import Loader from "../../../components/Loader";

function AllUsers() {
  const apiUrl = import.meta.env.VITE_BASE_URL;
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null); // Store selected user data

  async function fetchProducts() {
    try {
      setLoading(true);

      const data = await fetch(apiUrl + "/users");
      const finaldata = await data.json();
      setData(finaldata);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  const dialogvar = useRef(null);
  const openModal = (user) => {
    setSelectedUser(user);
    dialogvar.current.showModal();
  };
  const closeModal = () => {
    dialogvar.current.close();
    setSelectedUser(null);
  };

  const users = data.map((user) => (
    <tbody
      // style={{ border: "1px solid black", margin: "10px", padding: "10px" }}
      key={user.id}
    >
      <tr onClick={() => openModal(user)}>
        <td>{user.id}</td>
        {/* <td>{user.email}</td> */}
        <td>{user.username}</td>
        {/* <td>{user.password}</td> */}
        <td>
          {user.name.firstname} {user.name.lastname}
        </td>
        {/* <td>{user.phone}</td> */}
        <td>
          City: {user.address.city} <br /> Latitude:{" "}
          {user.address.geolocation.lat} <br />
          Longitude:
          {user.address.geolocation.long}
        </td>
      </tr>
    </tbody>
  ));
  if (error) {
    return (
      <>
        <ErrorPage />
      </>
    );
  }
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <div style={{ color: "red" }}>{error}</div>

      {data.length > 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px 0px",
          }}
        >
          <table className="user-table">
            <thead>
              <tr>
                <th>Id</th>
                {/* <th>Email</th> */}
                <th>Username</th>
                {/* <th>Password</th> */}
                <th>Name</th>
                {/* <th>Phone</th> */}
                <th>Address</th>
              </tr>
            </thead>
            {users}
          </table>
          <dialog
            ref={dialogvar}
            className="user-modal"
            onClick={(e) => {
              if (e.target === e.currentTarget) closeModal();
            }}
          >
            {selectedUser && (
              <div className="outer-div">
                <div className="modal-content">
                  <h2>User Details</h2>
                  <p>
                    <strong>ID:</strong> {selectedUser.id}
                  </p>
                  <p>
                    <strong>Email:</strong> {selectedUser.email}
                  </p>
                  <p>
                    <strong>Username:</strong> {selectedUser.username}
                  </p>
                  <p>
                    <strong>Name:</strong> {selectedUser.name.firstname}{" "}
                    {selectedUser.name.lastname}
                  </p>
                  <p>
                    <strong>Phone:</strong> {selectedUser.phone}
                  </p>
                  <p>
                    <strong>City:</strong> {selectedUser.address.city}
                  </p>
                  <p>
                    <strong>Latitude:</strong>{" "}
                    {selectedUser.address.geolocation.lat}
                  </p>
                  <p>
                    <strong>Longitude:</strong>{" "}
                    {selectedUser.address.geolocation.long}
                  </p>
                  <button className="moderl-btn" onClick={closeModal}>
                    X
                  </button>
                </div>
              </div>
            )}
          </dialog>
        </div>
      ) : null}
      {/* <button onClick={fetchProducts}>All Users</button> */}
    </>
  );
}

export default AllUsers;
