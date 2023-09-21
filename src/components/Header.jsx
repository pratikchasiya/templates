import React, {Fragment} from "react";
import {Container} from "reactstrap";
import "../styles/header.css";

const Header = () => {
  return (
    <Fragment>
      {/* <Container> */}
      <header>
        <nav className="navbar navbar-expand-lg bg-white nav">
          <div className="container-fluid">
            <a className="navbar-brand logo" href="#">
              CookM5
            </a>
            <button
              className="navbar-toggler order-sm-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active displayFour link"
                    aria-current="page"
                    href="#"
                  >
                    Mobile App
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active displayFour link"
                    aria-current="page"
                    href="#"
                  >
                    Appliances
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active displayFour link"
                    aria-current="page"
                    href="#"
                  >
                    Recipes
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active displayFour link"
                    aria-current="page"
                    href="#"
                  >
                    Partners
                  </a>
                </li>
              </ul>
            </div>
            <button className="btn1 d-none d-sm-block" type="button">
              Download App
            </button>
          </div>
        </nav>
      </header>
      {/* </Container> */}
    </Fragment>
  );
};

export default Header;
