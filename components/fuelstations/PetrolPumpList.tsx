// PetrolPumpList.tsx
import React from 'react';
import PetrolPump from "@/components/fuelstations/petrolpumpcity";

interface PetrolPumpData {
  id: string;
  image: string;
  title: string;
  address: string;
  services: string[];
  airCheck: string;
  pucCheck: string;
  punctureCheck: string;
  tyreReplacement: string;
  openTime: string;
  closeTime: string;
  location: { lat: string, lng: string };
  contact: string;
  distance: string;
}

interface PetrolPumpListProps {
  petrolPumpsData: PetrolPumpData[];
  handleLoadMore: () => void;
}

const PetrolPumpList: React.FC<PetrolPumpListProps> = ({ petrolPumpsData, handleLoadMore }) => {
  return (
    <div className="row mt-4">
      <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
        <div className="container">
          <div className="row">
            {petrolPumpsData.map((pump) => (
              <PetrolPump key={pump.id} {...pump} />
            ))}
          </div>
          <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12 text-center">
            <button type="button" className="btn btn-outline-primary mt-4 mb-4" onClick={handleLoadMore}>
              Load More....
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetrolPumpList;
