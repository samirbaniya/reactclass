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
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1386.3217348441706!2d85.52483420410057!3d27.619997752489287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb09001165cc1f%3A0xcc11f62785f9fa98!2sAdoptBuddy!5e1!3m2!1sen!2snp!4v1726210373363!5m2!1sen!2snp"
          width="300"
          height="200"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </footer>
  );
}

export default Footer;
