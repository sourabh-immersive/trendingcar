import React from 'react';
import Link from "next/link";


interface TollplazaListProps {
  stateName: string;
  imageUrl: string;
  slug:string;
}

const TollplazaList: React.FC<TollplazaListProps> = ({ stateName,slug, imageUrl}) => {
  
  return (
    <div className="col-md-2" style={{ cursor: 'pointer' }}>
      <div className="state-box-wrapper">
        <img src={imageUrl} alt={stateName} className="img-fluid" />
        <h5 className="state-name mb-0">
          <Link href={`/toll-plaza/${slug}`}>{stateName.toUpperCase()}</Link></h5>
      </div>
    </div>
  );
};

export default TollplazaList;
