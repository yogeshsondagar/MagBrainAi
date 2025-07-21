import React from "react";
import { useLocation } from "react-router-dom";
import navItems from "./utils/menuData";
import OffcanvasAccordion from "./OffcanvasAccordion";

function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div>
      <div className="navbar-area style-2" id="navbar">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="/">
              MagbrainAi
            </a>
            <div className="other-all-option">
              <div className="other-option m-0 d-lg-none">
                <button
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                  className="shop-button"
                >
                  <i className="bx bx-shopping-bag"></i>
                  <span className="cart-number">0</span>
                </button>
              </div>
              <div className="other-option d-lg-none">
                <button
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasTop"
                  aria-controls="offcanvasTop"
                  className="search-button"
                >
                  <i className="bx bx-search"></i>
                </button>
              </div>
              <a
                className="navbar-toggler"
                data-bs-toggle="offcanvas"
                href="#navbarOffcanvas"
                role="button"
                aria-controls="navbarOffcanvas"
              >
                <span className="burger-menu">
                  <span className="top-bar"></span>
                  <span className="middle-bar"></span>
                  <span className="bottom-bar"></span>
                </span>
              </a>
            </div>

            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                {navItems.map((item, idx) => (
                  <li className="nav-item" key={idx}>
                    <a
                      href={item.link}
                      className={`nav-link ${
                        item.dropdown ? "dropdown-toggle" : ""
                      } ${currentPath === item.link ? "active" : ""}`}
                    >
                      {item.label}
                    </a>
                    {item.dropdown && (
                      <ul className="dropdown-menu">
                        {item.dropdown.map((sub, subIdx) => (
                          <li className="nav-item" key={subIdx}>
                            <a
                              href={sub.link}
                              className={`nav-link ${
                                currentPath === sub.link ? "active" : ""
                              }`}
                            >
                              {sub.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>

              <div className="others-option d-flex align-items-center">
                <div className="option-item">
                  <button
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                    className="shop-button"
                  >
                    <i className="bx bx-shopping-bag"></i>
                    <span className="cart-number">0</span>
                  </button>
                </div>
                <div className="option-item">
                  <button
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasTop"
                    aria-controls="offcanvasTop"
                    className="search-button"
                  >
                    <i className="bx bx-search"></i>
                  </button>
                </div>
                <div className="option-item">
                  <a href="contact.html" className="default-btn">
                    <span>Get Started</span>{" "}
                    <i className="bx bx-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div
        className="responsive-navbar offcanvas offcanvas-end"
        data-bs-backdrop="static"
        tabIndex="-1"
        id="navbarOffcanvas"
      >
        <div className="offcanvas-header">
          <a className="logo d-inline-block" href="/">
            Magbrain
          </a>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <OffcanvasAccordion items={navItems} currentPath={currentPath} />
        </div>
      </div>
    </div>
  );
}

export default Header;
