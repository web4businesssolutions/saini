import React, { useEffect } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "wowjs/css/libs/animate.css";
// import "./index.css";
// import './App.css'

function App() {
 useEffect(() => {
     // WOW.js initialization
     const WOW = require("wowjs");
     new WOW.WOW().init();
   }, []);
 
  return (
   <>
      <Header />
      <main>
        {/* ✅ Carousel Section */}
        <section id="carousel" className="text-center bg-light py-5">
           <div className="container-fluid p-0 mb-5">
            <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="true" data-bs-interval="3000">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="w-100" src="img/slider/slider 3.jpg" alt="Cooling" />
                  <div className="carousel-caption">
                    <h1 className="display-4 text-white mb-4 animate__animated animate__fadeInDown">Quality Cooling Solutions</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ✅ About Section */}
        <section id="about" className="container py-5">
          <div className="text-center mb-5">
            <h2>About Us</h2>
            <p>We are a professional team specializing in heating & cooling systems.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
