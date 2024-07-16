import Link from "next/link";
import React from "react";
import { BsHouseDoor } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Header() {
  return (
    <div className="main-header">
      <header className="bg-white py-2 shadow-sm">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 d-flex align-items-center">
              <img
                src="/logo.png"
                alt="Logo"
                className="img-fluid logo me-4 cursor-pointer"
              />
              <span className="site-text fw-bold">#chuno apni best car</span>
            </div>
            <div className="col-md-4 my-2 my-md-0 searchbar">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
                <button className="btn btn-theme" type="button">
                  <img
                    src="/search-icon.png"
                    className="img-fluid"
                  />
                </button>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-end align-items-center">
              <a href="#" className="wishlist text-primary me-2 fz-22">
                <img
                  src="/wishlist.png"
                  alt="Wishlist"
                  className="logo"
                />
              </a>
              <Link href="#" target="_blank" className="text-black header-sociocon me-2 fz-22">
                <FaFacebook />
              </Link>
              <Link href="#" target="_blank" className="text-black header-sociocon me-2 fz-22">
                <FaInstagram />
              </Link>
              <Link href="#" target="_blank" className="text-black header-sociocon me-2 fz-22">
                <FaXTwitter />
              </Link>
              <Link href="#" target="_blank" className="text-black header-sociocon fz-22">
                <FaLinkedinIn />
              </Link>
              {/*<a href="#" className="login text-black text-decorat">
                <img
                  src="/user.png"
                  alt="User"
                  className="logo me-1"
                />
                Login / Register
              </a>*/}  
            </div>
          </div>
        </div>
      </header>

      <nav className="navbar navbar-expand-md navbar-light bg-white border-top border-bottom">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu"
            aria-controls="navbarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav me-auto">
              <li className="nav-item me-4">
                <Link
                  className="nav-link"
                  href="/home"
                >
                  <BsHouseDoor />
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link
                  className="nav-link"
                  href="#"
                >
                  FIND A CAR
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link
                  className="nav-link"
                  href="/rto"
                >
                  RTO
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link
                  className="nav-link"
                  href="/toll-plaza"
                >
                  TOLL PLAZA
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link
                  className="nav-link"
                  href="/fuel-stations"
                >
                  FUEL STATIONS
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link
                  className="nav-link"
                  href="/blogs"
                >
                  BLOGS & NEWS
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link
                  className="nav-link"
                  href="/blogs"
                >
                  ELECTRIC VEHICLE
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link" href="#">
                  IMAGES
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  MORE
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" href="#">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Terms of Use
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Latest Updates
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
