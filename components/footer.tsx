"use client";

import React, { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <div className="main-footer">
      <footer className="bg-primary py-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <span className="text-white">
                &copy; Copyright 2024 trending car. All Rights Reserved.{" "}
              </span>
            </div>
            <div className="col-md-6">
              <ul className="nav justify-content-center justify-content-md-end">
                <li className="nav-item">
                  <a className="nav-link text-white" href="#menu1">
                    Visitor Agreement
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#menu2">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
