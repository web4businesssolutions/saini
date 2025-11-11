import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "animate.css";
import "../index.css";

const Header = () => {
  useEffect(() => {
    // Spinner hide
    window.addEventListener("load", function () {
      const spinner = document.getElementById("spinner");
      if (spinner) spinner.classList.add("hide");
    });

    // Initialize WOW animations
    if (window.WOW) new window.WOW().init();

    // Bootstrap carousel
    const carouselEl = document.querySelector("#header-carousel");
    if (carouselEl && window.bootstrap) {
      new window.bootstrap.Carousel(carouselEl, {
        interval: 3000,
        wrap: true,
        ride: "carousel",
      });
    }
  }, []);

  return (
    <>
      {/* Spinner */}
      <div id="spinner">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>

      {/* Topbar */}
      <div className="container-fluid topbar py-2 px-0 d-none d-lg-block">
        <div className="row gx-0 align-items-center">
          <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center me-4">
              <small className="fa fa-phone-alt me-2"></small>
              <small>7891346525</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center me-4">
              <small className="far fa-envelope-open me-2"></small>
              <small>keshavkumarsaini286@gmail.com</small>
            </div>
          </div>
          <div className="col-lg-5 px-5 text-end">
            <ol className="breadcrumb justify-content-end mb-0">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item"><a href="#">Terms</a></li>
              <li className="breadcrumb-item"><a href="#">Privacy</a></li>
              <li className="breadcrumb-item"><a href="#">Support</a></li>
            </ol>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5">
        <a href="#" className="navbar-brand d-flex align-items-center" style={{ marginLeft: "60px" }}>
          <h1 className="m-0">
            <img
              className="img-fluid me-3"
              src="/img/logo/logo.png"
              alt="Saini Refrigeration Logo"
              style={{ width: "150px", height: "auto" }}
            />
          </h1>
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav mx-auto bg-light pe-4 py-3 py-lg-0">
            <a href="#" className="nav-item nav-link active">Home</a>
            <a href="#" className="nav-item nav-link">About Us</a>
            <a href="#" className="nav-item nav-link">Our Services</a>
            <a href="#" className="nav-item nav-link">Products</a>
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
              <div className="dropdown-menu bg-light border-0 m-0">
                <a href="#" className="dropdown-item">Features</a>
                <a href="#" className="dropdown-item">Free Quote</a>
                <a href="#" className="dropdown-item">Our Team</a>
                <a href="#" className="dropdown-item">Testimonial</a>
                <a href="#" className="dropdown-item">404 Page</a>
              </div>
            </div>
            <a href="#" className="nav-item nav-link">Contact Us</a>
          </div>

          <div className="h-100 d-lg-inline-flex align-items-center d-none">
            <button
              className="btn btn-square bg-primary text-white me-2 position-relative"
              data-bs-toggle="modal"
              data-bs-target="#cartModal"
              id="cartButton"
            >
              <i className="bi bi-cart"></i>
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger cart-badge"
                id="cartBadge"
                style={{ display: "none" }}
              >
                0
              </span>
            </button>
            <button
              className="btn btn-square bg-primary text-white"
              data-bs-toggle="modal"
              data-bs-target="#quoteModal"
            >
              <i className="bi bi-chat-quote"></i>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
