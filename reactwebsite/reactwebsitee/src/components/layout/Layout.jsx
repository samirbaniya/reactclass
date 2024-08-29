import { Outlet } from "react-router-dom"
import Header from "../header/Header"
import Footer from "../footer/Footer"

function Layout() {
  return (
    <div className="wholePage">
        <Header />
        <Outlet />
        <Footer />
      </div>
  )
}

export default Layout