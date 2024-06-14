"use client"

import React from "react"

export default function LoadingSkeleton() {
  return (
    <div className="skeleton-bloghero">
      <div className="row">
        <div className="col-md-8 col-sm-12 col-lg-8 col-xl-8 col-xxl-8">
          <img src="https://via.placeholder.com/600x400" alt="" />
          <h2></h2>
        </div>
        <div className="col-md-4 col-sm-12 col-lg-4 col-xl-4 col-xxl-4">
          <div className="latest-stories">
            <div className="box">
              <div className="skeleton">
                <div className="skeleton-left flex1">
                  <div className="square"></div>
                </div>
                <div className="skeleton-right flex2">
                  <div className="line h17 w40 m10"></div>
                  <div className="line"></div>
                  <div className="line h8 w50"></div>
                  <div className="line  w75"></div>
                </div>
              </div>
              <div className="skeleton">
                <div className="skeleton-left flex1">
                  <div className="square"></div>
                </div>
                <div className="skeleton-right flex2">
                  <div className="line h17 w40 m10"></div>
                  <div className="line"></div>
                  <div className="line h8 w50"></div>
                  <div className="line  w75"></div>
                </div>
              </div>
              <div className="skeleton">
                <div className="skeleton-left flex1">
                  <div className="square"></div>
                </div>
                <div className="skeleton-right flex2">
                  <div className="line h17 w40 m10"></div>
                  <div className="line"></div>
                  <div className="line h8 w50"></div>
                  <div className="line  w75"></div>
                </div>
              </div>
              <div className="skeleton">
                <div className="skeleton-left flex1">
                  <div className="square"></div>
                </div>
                <div className="skeleton-right flex2">
                  <div className="line h17 w40 m10"></div>
                  <div className="line"></div>
                  <div className="line h8 w50"></div>
                  <div className="line  w75"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
