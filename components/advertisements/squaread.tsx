import React from "react";
import Image from "next/image";

const SquareAd = async () => {

  const res = await fetch(
    `https://trendingcar.com/admin/api/advertise`,
    // { next: { revalidate: 3600 } }
  );

  return ( !res.status &&
    <div className="ads_wrapper mb-4">
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

export default SquareAd;
