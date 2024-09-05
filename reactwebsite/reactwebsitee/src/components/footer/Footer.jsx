import { NavLink } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <footer>
      <div>
        Links
        <ul>
          <NavLink to={"/home"}>
            <li>Home</li>
          </NavLink>

          <NavLink to={"/about"}>
            <li>About</li>
          </NavLink>

          <NavLink to={"/contact"}>
            <li>Contact</li>
          </NavLink>
        </ul>
      </div>

      <div>
        Other Links
        <ul>
          <li>...</li>
          <li>...</li>
          <li>...</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
