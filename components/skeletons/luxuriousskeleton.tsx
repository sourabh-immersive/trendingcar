"use client"

import React from "react"

export default function LuxuriousSkeleton() {
  return (
    <div className="webstory-skeleton mt-4">
      <div className="row">
        <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className="stories skeleton-bloghero mb-4">
            <div className="box-square1">
              <div className="line h17 w40 m10 box-shadow"></div>
              <div className="line"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 col-sm-12 col-lg-4 col-xl-3 col-xxl-3">
          <div className="stories skeleton-bloghero mb-4">
            <div className="boxx-square"></div>
            <div className="line h17 w60 m10 box-shadow luxurious-line mt-2"></div>
            <div className="line"></div>
          </div>
        </div>
        <div className="col-md-3 col-sm-12 col-lg-4 col-xl-3 col-xxl-3">
          <div className="stories skeleton-bloghero mb-4">
            <div className="boxx-square"></div>
            <div className="line h17 w60 m10 box-shadow luxurious-line mt-2"></div>
            <div className="line"></div>
          </div>
        </div>
        <div className="col-md-3 col-sm-12 col-lg-4 col-xl-3 col-xxl-3">
          <div className="stories skeleton-bloghero mb-4">
            <div className="boxx-square"></div>
            <div className="line h17 w60 m10 box-shadow luxurious-line mt-2"></div>
            <div className="line"></div>
          </div>
        </div>
        <div className="col-md-3 col-sm-12 col-lg-4 col-xl-3 col-xxl-3">
          <div className="stories skeleton-bloghero mb-4">
            <div className="boxx-square"></div>
            <div className="line h17 w60 m10 box-shadow luxurious-line mt-2"></div>
            <div className="line"></div>
          </div>
        </div>
      </div>
    </div>
  );
}