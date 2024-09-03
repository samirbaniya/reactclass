import { Outlet } from "react-router-dom"
import Header from "../header/Header"
import Footer from "../footer/Footer"

function Layout() {
  return (
    <div className="wholePage">
        <Header />
        <main><Outlet /></main>
        
        <Footer />
      </div>
  )
}

export default Layout