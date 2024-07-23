"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaFacebook, FaInstagram, FaPinterest, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { BsFillSendFill } from "react-icons/bs";


export default function Footer() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <div className="main-footer">
      <footer className="py-0">

        <div className="row" style={{ width: '100%' }}>

          <div className="col-md-12 border-bottom footer-top">
            <div className="container">
              <div className="row py-4">
                <div className="col-md-3">
                  <h6>Overview</h6>
                  <ul className="list-unstyled">
                    <li>
                      <Link href="/about-trending-car">About Trending Cars</Link>
                    </li>
                    {/* <li>
                      <Link href="/team">Team</Link>
                    </li> */}
                    <li>
                      <Link href="/terms-and-conditions">Terms & Conditions</Link>
                    </li>
                    <li>
                      <Link href="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href="/corporate-policies">Corporate Policies</Link>
                    </li>
                    <li>
                      <Link href="/faq">FAQs</Link>
                    </li>
                    <li>
                      <Link href="#">Sitemap</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <h6>Others</h6>
                  <ul className="list-unstyled">
                    <li>
                      <Link href="/car-news-india">Car News</Link>
                    </li>
                    <li>
                      <Link href="/car-expert-reviews">Car Reviews</Link>
                    </li>
                    <li>
                      <Link href="/car-collection">Car Collections</Link>
                    </li>
                    <li>
                      <Link href="/tips-and-advice">Tips & Advice</Link>
                    </li>
                    <li>
                      <Link href="#">Upcoming Cars</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <h6>Connect With Us</h6>
                  <ul className="list-unstyled">
                    <li>
                      <Link href="#">Contact Us</Link>
                    </li>
                    <li>
                      <Link href="#">Advertise With Us</Link>
                    </li>
                    <li>
                      <Link href="/car-news-india">Latest News</Link>
                    </li>
                    <li>
                      <Link href="#">Ask Anything</Link>
                    </li>
                    <li>
                      <Link href="#">Coming new ...</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <h6>Follow Us</h6>
                  <div className="d-flex justify-content-start align-items-center mb-4 mt-2">
                    <Link href="https://www.facebook.com/TrendingCar" target="_blank" className="text-black header-sociocon me-2 fz-22">
                      <FaFacebook />
                    </Link>
                    <Link href="https://www.instagram.com/" target="_blank" className="text-black header-sociocon me-2 fz-22">
                      <FaInstagram />
                    </Link>
                    <Link href="https://in.pinterest.com/#search" target="_blank" className="text-black header-sociocon me-2 fz-22">
                      <FaPinterest />
                    </Link>
                    <Link href="https://www.youtube.com/@trendingcar3924" target="_blank" className="text-black header-sociocon me-2 fz-22">
                      <FaYoutube />
                    </Link>

                    <Link href="https://www.linkedin.com/company/trending-car" target="_blank" className="text-black header-sociocon fz-22">
                      <FaLinkedinIn />
                    </Link>
                  </div>
                  <h6>Sign up for our newsletter</h6>
                  <div className="form-group emailer">
                    <input name="txt_enter_email" id="txt_enter_email" className="form-control" type="email" placeholder="Email" />
                    <button type="button" className="btn news-letter-2 btn-theme text-white" ><BsFillSendFill /></button>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>

      </footer>
      <div className="copyright-area" style={{ background: '#e1e1e1' }}>
        <div className="col-md-12 border-bottom footer-bottom" >
          <div className="container">
            <div className="row py-4">
              <div className="col-md-12 text-center">
                <p className="mb-0 fz-14">Copyright 2024 Trending Car. All Rights Reserved.</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
