'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaHouse } from 'react-icons/fa6';

export const NavMenu = () => {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);
  const [activePath, setActivePath] = useState<string>(pathname);

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  const isActive = (path: string) => path === activePath;

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleClose = () => {
    setExpanded(false);
  };

  return (
      <nav className="navbar navbar-expand-md navbar-light bg-white border-top py-2 mt-2">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarMenu"
            aria-expanded={expanded}
            aria-label="Toggle navigation"
            onClick={handleToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`} id="navbarMenu">
            <ul className="navbar-nav me-auto">
              <li className="nav-item me-4">
                <Link
                  className={`nav-link ${isActive('/') ? 'active' : ''}`}
                  href="/"
                  onClick={handleClose}
                >
                  <FaHouse />
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link
                  className={`nav-link ${isActive('/car-news-india') ? 'active' : ''}`}
                  href="/car-news-india"
                  onClick={handleClose}
                >
                  Car News
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link
                  className={`nav-link ${isActive('/car-collection') ? 'active' : ''}`}
                  href="/car-collection"
                  onClick={handleClose}
                >
                  Car Collection
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link
                  className={`nav-link ${isActive('/car-expert-reviews') ? 'active' : ''}`}
                  href="/car-expert-reviews"
                  onClick={handleClose}
                >
                  Car Expert Reviews
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link
                  className={`nav-link ${isActive('/rto') ? 'active' : ''}`}
                  href="/rto"
                  onClick={handleClose}
                >
                  RTO{"'"}s
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link
                  className={`nav-link ${isActive('/fuel-stations') ? 'active' : ''}`}
                  href="/fuel-stations"
                  onClick={handleClose}
                >
                  FUEL STATIONS
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link
                  className={`nav-link ${isActive('/toll-plaza') ? 'active' : ''}`}
                  href="/toll-plaza"
                  onClick={handleClose}
                >
                  Toll Plaza
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link
                  className={`nav-link ${isActive('/tips-and-advice') ? 'active' : ''}`}
                  href="/tips-and-advice"
                  onClick={handleClose}
                >
                  Tips & Advice
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link
                  className={`nav-link ${isActive('/auto-images') ? 'active' : ''}`}
                  href="/auto-images"
                  onClick={handleClose}
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
};