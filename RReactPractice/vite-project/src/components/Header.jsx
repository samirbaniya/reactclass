/* eslint-disable react/prop-types */
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";

function Header(props) {
  const { setRoutes } = props;
  // function routeSwitchContact() {
  //   setRoutes(<Contact />);
  // }
  // function routeSwitchAbout() {
  //   setRoutes(<About />);
  // }
  // function routeSwitchHome() {
  //   setRoutes(<Home />);
  // }
  return (
    <header>
      <img
        onClick={() => {
          setRoutes(<Home />);
        }}
        className="logo"
        src="logo.png"
        alt="logo"
      />
      <nav>
        <ul>
          {/* <li onClick={routeSwitchHome}>Home</li>
          <li onClick={routeSwitchAbout}>About</li>
          <li onClick={routeSwitchContact}>Contact us</li> */}
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
      </nav>
      <div className="login-btn">
        <button>Login</button>
      </div>
    </header>
  );
}

export default Header;
