import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./Layout.css";
function Layout() {
  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className="wholePage">
      <Header />
      <main>
        <Outlet />
        <div className="go-to-top-div">
          <button className="go-to-top-btn" onClick={handleScrollToTop}>
            ^
          </button>
        </div>
      </main>
      <Footer />
      <div>
        <p className="copyright">© 2024 AdoptBuddy. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Layout;
