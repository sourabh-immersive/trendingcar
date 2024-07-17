import React from "react";
import Image from "next/image";

interface WideProps {
  img_url?: string;
}

const Wide: React.FC<WideProps> = async ({ img_url }) => {

  const res = await fetch(
    `https://trendingcar.com/admin/api/advertise`,
    // { next: { revalidate: 3600 } }
  );

  const fallbackImage = "/image-9.png";
  const imageUrl = img_url || fallbackImage;

  return ( !res.status &&
    <div className="container adrow mb-4">
      <div className="ads_wrapper">
        <section className="auto-ad-container text-center">
          <Image
            className="img-fluid"
            src={imageUrl}
            width={968}
            height={91}
            alt="trending car"
            priority
          />
        </section>
      </div>
    </div>
  );
};

export default Wide;
