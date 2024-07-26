import Link from "next/link";
import React from "react";
import FilterableSelect from "./FilterableSelect";
import { FaFacebook,FaInstagram,FaPinterest,FaLinkedinIn,FaYoutube,FaHouse} from "react-icons/fa6"; 
import { NavMenu } from "./NavMenu";
import Image from 'next/image';


export default function Header() {
  const GTM_ID = 'G-3BPTSPS0CY'; // Replace with your GTM container ID

  return (
    <>
      <div className="main-header mb-4">
      <header className="bg-white pt-2 shadow-sm">
        
      <link rel="icon" href="/favicon.ico" /> 
      <link rel="icon" href="/favicon.png" />

      <link rel="icon" href="/favicon/favicon.ico" /> 
      <link rel="icon" href="/favicon/favicon.png" />
           {/* Google Tag Manager */}
           
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GTM_ID}');
              `,
            }}
          ></script>
        <div className="container">
          <div className="row align-items-center" style={{justifyContent: 'space-between'}}>
            <div className="col-md-4 d-flex align-items-center">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Trending Car Logo"
                  className="img-fluid logo me-4 cursor-pointer"
                  width={190}
                  height={45}
                />
              </Link>
              <span className="site-text fw-bold">#ChunoApniBestCar</span>
            </div>
            <div className="col-md-4 my-2 my-md-0 searchbar">
              <FilterableSelect postsData={true} />
            </div>
            <div className="col-md-3 d-flex justify-content-end align-items-center social-iconss">
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
          <NavMenu />
        </div>
        <meta name="google-site-verification" content="nslDjoMXANGePJeDpvDOkZXoYO9ezvtQZdrVGBKjmFo" />
      </header>
    </div>
    </>
  );
}
