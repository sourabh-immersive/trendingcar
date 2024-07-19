import Link from "next/link";
import React from "react";
import FilterableSelect from "./FilterableSelect";
import type { Route } from 'next'
import { NavMenu } from "./NavMenu";


export default function Header() {

  return (
    <div className="main-header mb-4">
      <header className="bg-white py-2 shadow-sm">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-4 d-flex align-items-center">
              <Link href="/">
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

      <NavMenu />
    </div>
  );
}
