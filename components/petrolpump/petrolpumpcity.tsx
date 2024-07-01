import React from 'react';

interface PetrolPumpProps {
  imageSrc: string;
  name: string;
  address: string;
  timings: string;
  contact: string;
  fuelTypes: { type: string, icon: string }[];
}

const PetrolPump: React.FC<PetrolPumpProps> = ({ imageSrc, name, address, timings, contact, fuelTypes }) => {
  return (
    <div className="col-md-4 col-sm-12 col-lg-4 col-xl-4 col-xxl-4">
      <div className="petrol-pump-wrapper mb-4">
        <div className="d-flex align-items-center">
          <img src={imageSrc} className="img-fluid me-2" alt={`${name} logo`} />
          <h5 className="mb-0 fz-16 text-primary">{name}</h5>
        </div>
        <p className="mb-0 fz-14 mb-2">{address}</p>
        <ul className="list-style-none pb-2">
          <li className="fz-14">
            <img src="/time.png" className="img-fluid me-2" alt="Time icon" /> <b>Open now:</b> {timings}
          </li>
          <li className="fz-14">
            <img src="/call.png" className="img-fluid me-2" alt="Call icon" /> {contact}
          </li>
        </ul>
        <hr />
        <ul className="list-style-none pt-2 d-flex align-items-center">
          {fuelTypes.map((fuel, index) => (
            <li className="fz-14 me-4" key={index}>
              <img src={fuel.icon} className="img-fluid me-1" alt={`${fuel.type} icon`} /> {fuel.type}
            </li>
          ))}
        </ul>
        <button type="button" className="btn btn-primary mt-2">Get Direction</button>
      </div>
    </div>
  );
};

export default PetrolPump;
