import Navbar from "../navbar/Navbar";
import { NavLink } from "react-router-dom";
import "./Header.css";
function Header() {
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
        <button>Login</button>
      </div>
    </header>
  );
}

export default Header;
