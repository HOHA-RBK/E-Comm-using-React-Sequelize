import "./App.css";
import Home from "./compoent/Home.jsx";
import { BrowserRouter as Router , Route ,Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./compoent/Navbar.jsx";
import Contact from "./compoent/Contact.jsx";
import Signup from "./compoent/Signup.jsx";
import About from "./compoent/About.jsx";
import CatProd from "./compoent/CatProd.jsx";
import Dashboard from "./components/Dashboard.jsx";

function App() {
  return <>
  <Router>
    {/* <Navbar/> */}
    <Routes>
   {/*  <Route path="/" exact Component={Home} />
    <Route path="/about" exact Component={About} />
    <Route path="/contact" exact Component={Contact} />
    <Route path="/signup" exact Component={Signup} />
    <Route path="/categoryproduct" exact Component={CatProd} /> */}
    <Route path="/dashboard/*" exact Component={Dashboard} />


    </Routes>
  </Router>
  </>;
}

export default App;
