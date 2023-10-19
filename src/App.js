import "./App.css";
import { BrowserRouter, Route, Router, Routes, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import Service from "./pages/service/Service";
import Portfolio from "./pages/portfolio/Portfolio";
import About from "./pages/about/About";
import Career from "./pages/career/Career";
import Contact from "./pages/contact/Contact";
import Header from "./componets/Header";
import Footer from "./componets/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/career" element={<Career />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
