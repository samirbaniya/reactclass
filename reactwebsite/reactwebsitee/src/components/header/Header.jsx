import Navbar from "../navbar/Navbar";
import "./Header.css";
function Header() {
  return (
    <header>
      <section>
        <img className="logo" src="/images/adoptLogo1.png" alt="logo" />
      </section>
      <Navbar />
      <button>Login</button>
    </header>
  );
}

export default Header;
