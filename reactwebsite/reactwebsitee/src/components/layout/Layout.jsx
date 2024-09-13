import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

function Layout() {
  return (
    <div className="wholePage">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <div>
        <p
          style={{
            textAlign: "center",
            backgroundColor: "#728ce5",
            color: "white",
          }}
        >
          © 2024 AdoptBuddy. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Layout;
