import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
function App() {
  return (
    <div>
      <Header />
      <div className="content">
        <Home />
      </div>
      <Footer />
      <div className="copyright">
        @Copyright
      </div>
    </div>
  );
}

export default App;
