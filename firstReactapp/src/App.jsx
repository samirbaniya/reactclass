import "./APP.css";
import Difference from "./component/Difference";
import Divide from "./component/Divide";
import Multiply from "./component/Multiply";
import Sum from "./component/sum";
// import Footer from "./component/Footer/Footer";
// import Header from "./component/Header/Header";
// import Home from "./pages/Home/Home";

function App() {
  return (
    <>
    <div>Sum is: <Sum a={5} b={2}/></div><br />
    <div>Result from Division is: <Divide a={5} b={2}/></div><br />
    <div>Difference is: <Difference a={5} b={2}/></div><br />
    <div>Product is: <Multiply a={5} b={2}/></div><br />
    
    

      {/* <Header/>
      <Home/>
      <Footer/> */}
    </>
  );
}

export default App;
