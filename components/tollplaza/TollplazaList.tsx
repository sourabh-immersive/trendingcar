import React, { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";


interface TollplazaListProps {
  stateName: string;
  imageUrl: string;
  slug:string;
}

const TollplazaList: React.FC<TollplazaListProps> = ({ stateName,slug, imageUrl}) => {
  const fallbackImage = 'state.png'; // Path to the fallback image in the public directory
  const [imageSrc, setImageSrc] = useState(imageUrl); 
  const handleError = () => {
    setImageSrc(fallbackImage);
  };
  return (
    <div className="col-md-2" style={{ cursor: 'pointer' }}>
      <Link href={`/toll-plaza/${slug}`}>
      <div className="state-box-wrapper">
        <Image
          src={imageSrc}
          alt={stateName} 
          width={'94'}
          height={'94'}
          className={"img-fluid"}
          onError={handleError}
        />
        <h5 className="state-name mb-0">
          <span>{stateName.toUpperCase()}</span>
        </h5>
      </div>
      </Link>
    </div>
  );
};

export default TollplazaList;
