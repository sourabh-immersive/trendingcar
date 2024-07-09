"use client";

import React from "react";

export default function Content() {
  return (
    <>
      <div className="container home_layout_skeleton">
        <div className="row">
          <div className="col-md-9">
            <div className="skeleton-bloghero2">
              <div className="skeleton">
                <div className="skeleton-right flex2">
                  <div className="line h17 m10"></div>
                  <div className="line h17 w75 m10"></div>
                  <div className="squareImg m20"></div>
                  <div className="line"></div>
                  <div className="line h8 w50"></div>
                  <div className="line w75"></div>
                  <div className="line h17 w40 m10"></div>
                  <div className="line"></div>
                  <div className="line h8 w50"></div>
                  <div className="line w75"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <section className="right-container">
              <div className="box-image">
                <div className="line h25 w60 m10 box-shadow"></div>
                <div className="line"></div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
