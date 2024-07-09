"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <div className="main-footer pt-4">
      <footer className="py-3">
        <div className="footerRows">
          <div className="container">
            <div className="row" style={{display: 'none'}}>
              <div className="col-md-3">
                <h5>India #1</h5>
                <p>Largest Auto portal</p>
              </div>
              <div className="col-md-3">
                <h5>Car Sold</h5>
                <p>Every 4 minute</p>
              </div>
              <div className="col-md-3">
                <h5>Offers</h5>
                <p>Stay updated pay less</p>
              </div>
              <div className="col-md-3">
                <h5>Compare</h5>
                <p>Decode the right car</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <h6>About CarDekho</h6>
                <ul className="list-unstyled">
                  <li>
                    <Link href="#">About</Link>
                  </li>
                  <li>
                    <Link href="#">Careers With Us</Link>
                  </li>
                  <li>
                    <Link href="#">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link href="#">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="#">Corporate Policies</Link>
                  </li>
                  <li>
                    <Link href="#">Investors</Link>
                  </li>
                  <li>
                    <Link href="#">FAQs</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h6>Connect with Us</h6>
                <ul className="list-unstyled">
                  <li>
                    <Link href="#">Feedback</Link>
                  </li>
                  <li>
                    <Link href="#">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="#">Advertise with Us</Link>
                  </li>
                  <li>
                    <Link href="#">Become Partner Dealer</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h6>Others</h6>
                <ul className="list-unstyled">
                  <li>
                    <Link href="#">Trending Car</Link>
                  </li>
                  <li>
                    <Link href="#">Trending Car | Fuel Stations</Link>
                  </li>
                  <li>
                    <Link href="#">Trending Car | RTO</Link>
                  </li>
                  <li>
                    <Link href="#">Trending Car | Toll</Link>
                  </li>
                  <li>
                    <Link href="#">Coming new ...</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
              {/* <Image src="/logo.png" alt="Trending Car Logo" height={39} width={156} /> */}
                <h5>India #1</h5>
                <p>Largest Auto portal</p>
                
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-6">
                <p>Copyright 2024 Trending Car. All Rights Reserved.</p>
              </div>
              <div className="col-md-6 text-md-end social-icons">
                <Link href="#" target="_blank">
                  <FaFacebook />
                </Link>
                <Link href="#" target="_blank">
                  <FaInstagram />
                </Link>
                <Link href="#" target="_blank">
                  <FaXTwitter />
                </Link>
                <Link href="#" target="_blank">
                  <FaLinkedinIn />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
