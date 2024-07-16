import Link from "next/link";
import React from "react";
import FilterableSelect from "./FilterableSelect";

export default function Header() {
  return (
    <div className="main-header">
      <header className="bg-white py-2 shadow-sm">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-4 d-flex align-items-center">
              <Link
              href="/">
              <img
                src="/logo.png"
                alt="Logo"
                className="img-fluid logo me-4 cursor-pointer"
              />
              </Link>
              <span className="site-text fw-bold">#chuno apni best car</span>
            </div>
            <div className="col-md-4 my-2 my-md-0 searchbar">
              <FilterableSelect postsData={true} />
            </div>
            <div className="col-md-4 d-flex justify-content-end">
              <a href="#" className="wishlist text-primary me-4">
                <img src="/wishlist.png" alt="Wishlist" className="logo" />
              </a>
              <a
                href="#"
                className="login text-black text-decorat"
                style={{ display: "none" }}
              >
                <img src="/user.png" alt="User" className="logo me-1" />
                Login / Register
              </a>
            </div>
          </div>
        </div>
      </header>

      <nav className="navbar navbar-expand-md navbar-light bg-white border-top border-bottom">
        <div className="container-fluid">
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
                <Link className="nav-link" href="/car-news-india">
                  Car News
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link" href="/car-collection">
                  Car Collection
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link" href="/car-expert-reviews">
                  Car Expert Reviews
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link" href="/rto">
                  RTO{"'"}s
                </Link>
              </li>

              <li className="nav-item me-4">
                <Link className="nav-link" href="/toll-plaza">
                  Toll Plaza
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link" href="/tips-and-advice">
                  Tips & Advice
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
