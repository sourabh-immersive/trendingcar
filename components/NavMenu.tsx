'use client'

import Link from 'next/link'
import { usePathname  } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FaHouse } from 'react-icons/fa6'

export const NavMenu = () => {
    const pathname = usePathname();
    const [activePath, setActivePath] = useState<string>(pathname);
  
    useEffect(() => {
      setActivePath(pathname);
    }, [pathname]);
  
    const isActive = (path: string) => path === activePath;
  return (
    <>
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
                  className={`nav-link ${isActive('/') ? 'active' : ''}`}
                  href="/"
                >
                  <FaHouse />
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link
                  className={`nav-link ${isActive('/car-news-india') ? 'active' : ''}`}
                  href="/car-news-india"
                >
                  Car News
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link
                  className={`nav-link ${isActive('/car-collection') ? 'active' : ''}`}
                  href="/car-collection"
                >
                  Car Collection
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link
                  className={`nav-link ${isActive('/car-expert-reviews') ? 'active' : ''}`}
                  href="/car-expert-reviews"
                >
                  Car Expert Reviews
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link
                  className={`nav-link ${isActive('/rto') ? 'active' : ''}`}
                  href="/rto"
                >
                  RTO{"'"}s
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link
                  className={`nav-link ${isActive('/fuel-stations') ? 'active' : ''}`}
                  href="/fuel-stations"
                >
                  FUEL STATIONS
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link
                  className={`nav-link ${isActive('/toll-plaza') ? 'active' : ''}`}
                  href="/toll-plaza"
                >
                  Toll Plaza
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link
                  className={`nav-link ${isActive('/tips-and-advice') ? 'active' : ''}`}
                  href="/tips-and-advice"
                >
                  Tips & Advice
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link
                  className={`nav-link ${isActive('/auto-images') ? 'active' : ''}`}
                  href="/auto-images"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
