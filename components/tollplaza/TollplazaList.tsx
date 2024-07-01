import React from 'react';


interface TollplazaListProps {
  stateName: string;
  imageUrl: string;
  
}

const TollplazaList: React.FC<TollplazaListProps> = ({ stateName, imageUrl}) => {
  
  return (
    <div className="col-md-2" style={{ cursor: 'pointer' }}>
      <div className="state-box-wrapper">
        <img src={imageUrl} alt={stateName} className="img-fluid" />
        <h5 className="state-name mb-0">{stateName.toUpperCase()}</h5>
      </div>
    </div>
  );
};

export default TollplazaList;
