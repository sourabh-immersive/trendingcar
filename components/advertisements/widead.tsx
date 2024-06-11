'use client'

import React from "react";
import Image from "next/image";

interface WideProps {
  img_url?: string;
}

const Wide: React.FC<WideProps> = ({ img_url }) => {
  const fallbackImage = "/image-9.png";
  const imageUrl = img_url || fallbackImage; 

  return (
    <div className="row ads_wrapper">
      <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
        <section className="auto-ad-container text-center">
          <Image className="img-fluid" src={imageUrl} width={968} height={91} alt="trending car" priority />
        </section>
      </div>
    </div>
  );
}

export default Wide;