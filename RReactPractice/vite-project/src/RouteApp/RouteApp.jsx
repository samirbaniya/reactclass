import { useState } from "react";
import Home from "../pages/Home";
import Header from "../components/header";
import Footer from "../components/footer";
function RouteApp() {
      const [routes, setRoutes] = useState(<Home/>);
      return (
        <div>
          <Header setRoutes={setRoutes} />
          <main>
            {routes}
          </main>
         <Footer/>
        </div>
      );
    }
    
export default RouteApp