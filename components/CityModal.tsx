import React from 'react';

interface CityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSearch: (city: string) => void;
}

const CityModal: React.FC<CityModalProps> = ({ isOpen, onClose, onSearch }) => {
  const [city, setCity] = React.useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleSearch = () => {
    onSearch(city);
  };

  return (
    <div className={`modal fade ${isOpen ? 'show' : ''}`} tabIndex={-1} aria-labelledby="CityModalLabel" aria-hidden={!isOpen} style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header bg-primary">
            <h5 className="modal-title text-white fz-18" id="changecityModalLabel">We need your city to customize your <br /> experience</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
          </div>
          <div className="modal-body text-center">
            <input
              type="text"
              className="form-control shadow border-0 py-3"
              placeholder="Search your city (e.g. Indore, Bhopal)"
              value={city}
              onChange={handleInputChange}
            />
            <button type="button" className="btn btn-primary mt-4" onClick={handleSearch}>Search Petrol Pump</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityModal;
