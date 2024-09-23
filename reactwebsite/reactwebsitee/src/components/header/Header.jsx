import Navbar from "../navbar/Navbar";
import { NavLink } from "react-router-dom";

import "./Header.css";
function Header() {
  const token = localStorage.getItem("token");
  function logout() {
    localStorage.clear("token");
    window.location.reload();
  }
  return (
    <header>
      <div className="header">
        <section>
          <NavLink to={"/home"}>
            <img
              id="logo"
              className="logo"
              src="/images/adoptLogo1.png"
              alt="logo"
            />
          </NavLink>
        </section>

        <Navbar />

        {!token ? (
          <div className="dropdown">
            <p>
              <img
                style={{ height: "45px", borderRadius: "50px" }}
                src="/images/userpic.png"
                alt="login"
              />
            </p>
            <div className="dropdown-content">
              <NavLink to={"/login"}>
                <p>Login</p>
              </NavLink>
              <p>
                <NavLink to={"/userprofile"}>Profile</NavLink>
              </p>
            </div>
          </div>
        ) : (
          <div className="dropdown">
            <p>
              <img
                style={{ height: "45px", borderRadius: "50px" }}
                src="/images/user.jpg"
                alt="logout"
              />
            </p>
            <div className="dropdown-content">
              <p onClick={logout}>Logout</p>
              <p>
                <NavLink to={"/userprofile"}>Profile</NavLink>
              </p>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
