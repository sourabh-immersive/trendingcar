import React, { useState } from 'react';
import Image from 'next/image';
  
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
  const [isImageLoaded, setIsImageLoaded] = useState(true);

  const handleError = () => {
    setIsImageLoaded(false);
  };
  const getInitials = (name: string) => {
    const nameParts = name.split(' ');
    const initials = nameParts.map(part => part[0].toUpperCase()).join('');
    return initials;
  };
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
          {isImageLoaded ? (
            <Image
            src={`/${image}.png`}
            className="img-fluid me-2"
            alt={`${title} logo`}
            onError={handleError}
            width={70} // Provide appropriate width
            height={70} // Provide appropriate height
          />
          ) : (
            <span className="initials-wrap me-2">{getInitials(image)}</span>
          )}
          <h5 className="mb-0 fz-16 text-theme">{capitalizeFirstLetter(title)}</h5>
        </div>
        <p className="mb-0 fz-14 mb-2">{capitalizeFirstLetter(address)}</p>
        <ul className="list-style-none pb-0 mb-0">
          <li className="fz-14">
            <Image src="/time.png" className="img-fluid me-2" alt="Time icon" width={20} height={20} /> <b>Open now:</b> {`${openTime} - ${closeTime}`}
          </li>
          <li className="fz-14">
            <Image src="/call.png" className="img-fluid me-2 ms-1" alt="Call icon" width={15} height={15} /> {contact}
          </li>
        </ul>
        <hr />
        <ul className="list-style-none pt-2 d-flex align-items-center mb-0">
          {services.map((service, index) => (
            <li className="fz-14 me-4 text-center" key={index}>
              <Image
                src={`/fuel-type1/${service.replace(/\s+/g, '')}.png`}
                className="img-fluid me-1"
                alt={`${service} icon`}
                width={30} // Provide appropriate width
                height={30} // Provide appropriate height
              /><br/> {service}
            </li>
          ))}
        </ul>
        <button type="button" className="btn btn-outline-theme mt-2 text-white" onClick={handleGetDirections}>
          Get Direction
        </button>
      </div>
    </div>
  );
};

export default PetrolPump;
