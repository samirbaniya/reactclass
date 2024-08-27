import Navbar from "../Navbar/Navbar"
import "./Header.css"

function Header() {
  return (
    <header className="flex">
        <section><img className="logo" src="/images/adoptLogo1.png" alt="logo" /></section>
        <Navbar/>
        <section><button>Login</button></section>
    </header>
  )
}

export default Header