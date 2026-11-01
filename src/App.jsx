import React from "react";
import Navbar from "./layouts/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import heroImage from "./assets/img/hero-pic.jpg";
import "./App.css";

function App() {
  const handleShopNow = () => {
    console.log("Shop Now button clicked!");
  }
  return (
    <>
      <Navbar brandName="MyBrand" />
      <main>
        <Home
          title="Upgrade Your Setup Today"
          subtitle="Discover premium accessories, smart audio, and everyday tech designed to enhance your work and leisure."
          buttonText="Shop Now"
          imageUrl={heroImage}
          onActionClick={handleShopNow}
        />
      </main>
    </>
  );
}

export default App;