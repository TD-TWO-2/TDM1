import React from "react";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-white">
      <div class="container" style={{height:55}}>
        <a class="navbar-brand" href="/">
        <img src={require('../../Images/logo.png')} style={{height:48}}/>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <div class="d-flex" role="search">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active fw-bold" aria-current="page" href="/">
                  <h6 className="mb-0">Home</h6>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active fw-bold" aria-current="page" href="/service">
                <h6 className="mb-0">Service</h6>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active fw-bold" aria-current="page" href="/Contactus">
                <h6 className="mb-0">Contact us</h6>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active fw-bold" aria-current="page" href="/RegisterNow">
                <h6 className="mb-0">Register Now</h6>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
