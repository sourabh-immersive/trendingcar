'use client';
import Link from "next/link";
import React from "react"; 
import Autocomplete from '@/components/autocomplete/autocomplete';
import { FaFacebook,FaInstagram,FaPinterest,FaLinkedinIn,FaYoutube,FaHouse} from "react-icons/fa6"; 
import Image from 'next/image';

export default function Header() {
  return (
    <div className="main-header fixed-top w-100">
      <header className="bg-white py-2 shadow-sm">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 d-flex align-items-center">
              <Link
              href="/">
              <Image
                src="/logo3.jpg"
                className="img-fluid logo me-4 cursor-pointer"
                alt="Logo"
                width={187} // Provide appropriate width
                height={43} // Provide appropriate height
              />
              </Link>
              <span className="site-text">#chuno apni best car</span>
            </div>
            <div className="col-md-5 my-2 my-md-0 searchbar">
              <Autocomplete  api={'fuelStationCities'} type={''} redirect={'car-brands'}/>
            </div>
            <div className="col-md-3 d-flex justify-content-end align-items-center">
              <a href="#" className="wishlist text-primary me-2 fz-22">
                <Image
                  src="/wishlist.png"
                  className="wishlogo"
                  alt="Wishlist"
                  width={24} // Provide appropriate width
                  height={24} // Provide appropriate height
                />
              </a>
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
                  href="/"
                >
                  <FaHouse />
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link" href="/car-news-india">
                  CAR NEWS
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link" href="/car-collection">
                  CAR COLLECTION
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link" href="/car-expert-reviews">
                  CAR EXPERT REVIEWS
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link" href="/rto">
                  RTO{"'"}s
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link" href="/fuel-stations">
                  FUEL STATIONS
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link" href="/toll-plaza">
                  TOLL PLAZA
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link" href="/tips-and-advice">
                  TIPS & ADVICE
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link" href="/auto-images">
                  GALLERY
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
