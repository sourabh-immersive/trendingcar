"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsFillSendFill } from "react-icons/bs";


export default function Footer() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <div className="main-footer">
      <footer className="py-0">
        <div className="footerRows">
          <div className="row">
            {/*<div className="col-md-12 border-bottom">
              <div className="container">
                <div className="row">
                  <div className="col-md-3">
                    <div className="d-flex align-items-center py-4 px-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="#747474" className="bi bi-award me-2" viewBox="0 0 16 16">
                        <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z"/>
                        <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"/>
                      </svg>
                      <div>
                        <h5>India #1</h5>
                        <p className="mb-0">Largest Auto portal</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="d-flex align-items-center py-4 px-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="#747474" className="bi bi-award me-2" viewBox="0 0 16 16">
                        <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z"/>
                        <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"/>
                      </svg>
                      <div>
                        <h5>Car Sold</h5>
                        <p className="mb-0">Every 4 minute</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="d-flex align-items-center py-4 px-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="#747474" className="bi bi-award me-2" viewBox="0 0 16 16">
                        <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z"/>
                        <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"/>
                      </svg>
                      <div>
                        <h5>Offers</h5>
                        <p className="mb-0">Stay updated pay less</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="d-flex align-items-center py-4 px-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="#747474" className="bi bi-award me-2" viewBox="0 0 16 16">
                        <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z"/>
                        <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"/>
                      </svg>
                      <div> 
                        <h5>Compare</h5>
                        <p className="mb-0">Decode the right car</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>*/}
          
            <div className="col-md-12 border-bottom footer-top">
              <div className="container">
                <div className="row py-4">
                  <div className="col-md-3">
                    <h6>Overview</h6>
                    <ul className="list-unstyled">
                      <li>
                        <Link href="#">About Trending Cars</Link>
                      </li>
                      <li>
                        <Link href="#">Team</Link>
                      </li>
                      <li>
                        <Link href="/terms-and-conditions">Terms & Conditions</Link>
                      </li>
                      <li>
                        <Link href="/privacy-policy">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link href="/corporate-policy">Corporate Policies</Link>
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
                        <Link href="#">Car Reviews</Link>
                      </li>
                      <li>
                        <Link href="#">Compare Cars</Link>
                      </li>
                      <li>
                        <Link href="#">New Cars</Link>
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
                        <Link href="#">Blogs</Link>
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
                  {/* <Image src="/logo.png" alt="Trending Car Logo" height={39} width={156} /> */}
                    <h6>Follow Us</h6>
                    {/*<ul className="list-unstyled mb-0">
                      <li>
                        <Link href="#">Largest Auto portal</Link>
                      </li>
                    </ul>*/}
                    <ul className="list-unstyled d-flex align-items-center">
                      <li>
                        <Link href="#" target="_blank" className="me-4 fz-18">
                          <FaFacebook />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" target="_blank" className="me-4 fz-18">
                          <FaInstagram />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" target="_blank" className="me-4 fz-18">
                          <FaXTwitter />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" target="_blank" className="me-4 fz-18">
                          <FaLinkedinIn />
                        </Link>
                      </li>
                    </ul>
                    <h6>Sign up for our newsletter</h6>
                    <div className="form-group pos-rel">
                      <input name="txt_enter_email" id="txt_enter_email" className="form-control" type="email" placeholder="Email" />
                      <button type="button" className="btn news-letter-2 btn-theme text-white" ><BsFillSendFill /></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-12 border-bottom footer-bottom">
              <div className="container">
                <div className="row py-4">
                  <div className="col-md-6">
                    <p className="mb-0">Copyright 2024 Trending Car. All Rights Reserved.</p>
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
          </div>
        </div>
      </footer>
    </div>
  );
}
