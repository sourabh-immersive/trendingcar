import React from "react";
import Image from "next/image";

export default function LongAd() {
  return (
    <div className="row ads_wrapper">
      <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
        <section className="auto-ad-container text-center">
          <Image className="img-fluid" src="/long-ad.png" width="312" height="1145" alt="trending car" />
        </section>
      </div>
    </div>
  );
}