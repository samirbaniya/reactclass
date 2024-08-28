import { useState } from "react";
import Home from "../../../pages/Home";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

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