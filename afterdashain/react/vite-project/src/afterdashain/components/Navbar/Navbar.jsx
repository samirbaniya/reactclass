import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navapi">
      <ul>
        <NavLink to={"/dogs"}>
          <li>Dogs</li>
        </NavLink>

        <NavLink to={"/cats"}>
          <li>Cats</li>
        </NavLink>

        <NavLink to={"/jokes"}>
          <li>Jokes</li>
        </NavLink>

        <NavLink to={"/birds"}>
          <li>Birds</li>
        </NavLink>

        <NavLink to={"/RedPanda"}>
          <li>Red Panda</li>
        </NavLink>

        <NavLink to={"/photos"}>
          <li>Photos</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Navbar;
