import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./App.css";
import About from "./components/About";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Work />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
