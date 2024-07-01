import React from "react";
import Image from "next/image";

export default function SquareAd() {
  return (
    <div className="ads_wrapper">
      <section className="auto-ad-container text-center">
        <Image
          className="img-fluid"
          src="/ad-square.png"
          width={310}
          height={257}
          alt="trending car"
          priority
        />
      </section>
    </div>
  );
}
