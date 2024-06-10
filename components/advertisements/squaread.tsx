'use client'

import React from "react";
import Image from "next/image";

export default function SquareAd() {
  return (
    <div className="row ads_wrapper">
      <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
        <section className="auto-ad-container text-center">
          <Image className="img-fluid" src="/ad-square.png" width={310} height={257} alt="trending car" priority />
        </section>
      </div>
    </div>
  );
}