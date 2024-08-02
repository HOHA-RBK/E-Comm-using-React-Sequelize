import "./App.css";
import Home from "./compoent/Home.jsx";
import { BrowserRouter as Router , Route ,Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./compoent/Navbar.jsx";
import Contact from "./compoent/Contact.jsx";
import Signup from './login & signup/Signup.jsx'
import About from "./compoent/About.jsx";
import CatProd from "./compoent/CatProd.jsx";
import Wishlist from "./compoent/Wishlist.jsx";
import login from "./login & signup/Login.jsx"
import Product from "./compoent/Product.jsx";
function App() {
  return <>
  <Router>
    <Navbar/>
    <Routes>
    <Route path="/wishlist" exact Component={Wishlist} />
    <Route path="/" exact Component={Home} />
    <Route path="/about" exact Component={About} />
    <Route path="/contact" exact Component={Contact} />
    <Route path="/signup" exact Component={Signup} />
    <Route path="/categoryproduct" exact Component={CatProd} />
    <Route path="/login" exact Component={login} />
    <Route path="/allproduct" exact Component={Product} />
    </Routes>
  </Router>
  </>;
}

export default App;
