import React from 'react';
  
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
  location_lat: string;
  location_lng: string;
  contact: string;
  distance: string;
}
const capitalizeFirstLetter = (str: string) => {
  return str.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};

const PetrolPump: React.FC<PetrolPumpData> = ({ image, title, address, openTime, closeTime, contact, services, location_lat , location_lng}) => {
  const handleGetDirections = () => {
    const lat = encodeURIComponent(location_lat);
    const lng = encodeURIComponent(location_lng);
    const formattedLocation = `${lat},${lng}`;
    const url = `https://www.google.com/maps/place/${formattedLocation}`;
    window.open(url, '_blank');
  };

  return (
    <div className="col-md-4 col-sm-12 col-lg-4 col-xl-4 col-xxl-4">
      <div className="petrol-pump-wrapper mb-4">
        <div className="d-flex align-items-center">
          <img src={image} className="img-fluid me-2" alt={`${title} logo`} />
          <h5 className="mb-0 fz-16 text-primary">{capitalizeFirstLetter(title)}</h5>
        </div>
        <p className="mb-0 fz-14 mb-2">{capitalizeFirstLetter(address)}</p>
        <ul className="list-style-none pb-2">
          <li className="fz-14">
            <img src="/time.png" className="img-fluid me-2" alt="Time icon" /> <b>Open now:</b> {`${openTime} - ${closeTime}`}
          </li>
          <li className="fz-14">
            <img src="/call.png" className="img-fluid me-2" alt="Call icon" /> {contact}
          </li>
        </ul>
        <hr />
        <ul className="list-style-none pt-2 d-flex align-items-center">
          {services.map((service, index) => (
            <li className="fz-14 me-4" key={index}>
              <img src={`/${service}.png`} className="img-fluid me-1" alt={`${service} icon`} /> {service}
            </li>
          ))}
        </ul>
        <button type="button" className="btn btn-primary mt-2" onClick={handleGetDirections}>
          Get Direction
        </button>
      </div>
    </div>
  );
};

export default PetrolPump;
