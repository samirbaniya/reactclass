import './Header.css'
function Header() {
  return (
    <header>
    <a href="home.html"><img className="logo" src="logo.png" alt="logo" /></a>
    <nav>
      <ul>
        <li><a href="./Home.jsx">Home</a></li>
        <li><a href="./About.jsx">About</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>
    <div className="login-btn"><a href="form.html"><button>Login</button></a></div>
    
  </header>
  )
}

export default Header