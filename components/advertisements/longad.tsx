import React from "react";
import Image from "next/image";

export default function LongAd() {
  return (
    <div className="ads_wrapper">
      <section className="auto-ad-container text-center">
        <Image
          className="img-fluid"
          src="/long-ad.png"
          width={312}
          height={1145}
          alt="trending car"
          priority
        />
      </section>
    </div>
  );
}
