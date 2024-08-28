
import { NavLink } from "react-router-dom";

function Header() {
  // <section>const { setRoutes } = props;
  // function routeSwitchContact() {
  //   setRoutes(<Contact />);
  // }
  // function routeSwitchAbout() {
  //   setRoutes(<About />);
  // }
  // function routeSwitchHome() {
  //   setRoutes(<Home />);
  // }</section>
  
  return (
    <header>
      <NavLink to={"/home"}>
      <img
        className="logo"
        src="logo.png"
        alt="logo"
      />
      </NavLink>
      
      <nav>
        {/* <section> <ul><li onClick={routeSwitchHome}>Home</li>
          <li onClick={routeSwitchAbout}>About</li>
          <li onClick={routeSwitchContact}>Contact us</li>
        -----------------------------------------------
          
          <li
            onClick={() => {
              setRoutes(<Home />);
            }}
          >
            Home
          </li>
          <li
            onClick={() => {
              setRoutes(<About />);
            }}
          >
            About
          </li>
          <li
            onClick={() => {
              setRoutes(<Contact />);
            }}
          >
            Contact us
          </li>
           </ul>
          -----------------------------------------------</section> */}
       

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
      </nav>
      <div className="login-btn">
        <button>Login</button>
      </div>
    </header>
  );
}

export default Header;
