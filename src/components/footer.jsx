import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container-fluid bg-dark footer mt-5 pt-5">
        <div className="container py-5">
          <div className="row g-5">
            {/* About */}
            <div className="col-md-6">
              <h1 className="text-white mb-4">
                <img className="img-fluid me-3" src="img/logo/logo.png" style={{ width: "100px", borderRadius: "50%" }} alt="" />
                Saini Refrigeration
              </h1>
              <span>
                Saini Refrigeration provides top-quality refrigeration and AC services across Neemrana and nearby areas.
                We specialize in installation, maintenance, and repair for residential and commercial clients.
              </span>
            </div>

            {/* Newsletter */}
            <div className="col-md-6">
              <h5 className="text-light mb-4">Subscribe to Our Newsletter</h5>
              <p>Receive updates on offers and services directly in your inbox.</p>
              <div className="position-relative">
                <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="email" placeholder="Enter your email" />
                <button type="button" className="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2">Subscribe</button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4 mt-5 mt-md-0">Contact Us</h5>
              <p><i className="fa fa-map-marker-alt me-3"></i>00, Near ICICI Bank, Neemrana, Alwar-301705</p>
              <p><i className="fa fa-phone-alt me-3"></i>+91 7891346525</p>
              <p><i className="fa fa-envelope me-3"></i>keshavkumarsaini286@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="container-fluid copyright py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0 text-white">
                &copy; {new Date().getFullYear()} <a href="#" className="copyright-link">Saini Refrigeration</a>
              </div>
              <div className="col-md-6 text-center text-md-end text-white">
                Designed & Developed by <a href="#" className="copyright-link">Web4Solution</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
