import React from "react";
import Home from "./pages/Home/Home.jsx";
import Navbar from "./layouts/Header.jsx";
import Footer from "./layouts/Footer.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Navbar brandName="MyBrand" />
      <main>
        <Home />
      </main>
      <Footer
        brandName="MyBrand"
        description="Premium consumer electronics and accessories store."
        email="contact@MyBrand.ma"
        phone="+212 522 00 11 22"
        location="Casablanca, Morocco"
        year={2026}
      />
    </>
  );
}

export default App;
