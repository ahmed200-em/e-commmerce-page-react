import React from "react";
import Navbar from "./layouts/Header"
import Hero from "./pages/Home/Home";
import heroImage from "./assets/img/hero-pic.jpg"
import "./App.css";

function App() {
  const handleShopNow = () => {
    // Handle the "Shop Now" button click event
    console.log("Shop Now button clicked!");
  }
  return (
    <>
      <Navbar brandName="MyBrand" />
      <main>
        <Hero
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