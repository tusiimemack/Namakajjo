import "./App.css";
import "./font/font.css";
// import Events from "./components/Events";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import Contact from "./components/Contact";
import Ministries from "./components/Ministries";
// import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Contact /> */}
      {/* <Events /> */}
      <Ministries />
      {/* <Home /> */}
      <Footer />
    </div>
  );
}

export default App;
