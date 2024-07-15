import React, { useState } from 'react';
import { MdOutlineArrowRightAlt } from "react-icons/md";

const CarTypes = ({ cars = [] }) => {
  const [activeTab, setActiveTab] = useState('Budget');

  const renderCarBox = (car) => (
    <div className="col-md-2 col-lg-2 col-xl-2 col-sm-12 no-gutter" key={car.name}>
        <div className="car-box border p-3 text-center br-0 cursor-pointer bg-hover-grey">
            {activeTab !== 'Budget' && (
                <div className="image-container">
                    <img src={car.image} alt={car.name} className="img-fluid" />
                </div>
            )}
            <div className="specifications d-flex align-items-center justify-content-center">
                <p className="mb-0 mr-4">{car.name}</p>
                {activeTab !== 'Budget' && <MdOutlineArrowRightAlt />}
            </div>
        </div>
    </div>
  );

  const renderTabContent = (tabId) => {
    const filteredCars = cars.filter(car => car.category === tabId);
    return (
      <div className={`tab-pane fade ${activeTab === tabId ? 'show active' : ''}`} id={`pills-${tabId}`} role="tabpanel">
        <div className="row">
          {filteredCars.map(renderCarBox)}
        </div>
      </div>
    );
  };

  const tabs = ['Budget', 'Body', 'Fuel', 'Transmission', 'Seating'];

  return (
    <section className="explore-brands py-50 px-0">
      <div className="container">
        <div className="d-flex align-items-center">
          <div className="text-left">
            <h5 className="page-title text-black">Find The Cars Of Your Choice</h5>
          </div>
          <div className="ms-auto">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              {tabs.map((tab, index) => (
                <li className="nav-item me-2" role="presentation" key={index}>
                  <button
                    className={`nav-link ${activeTab === tab ? 'active' : 'shadow'}`}
                    id={`pills-${tab}-tab`}
                    data-bs-toggle="pill"
                    data-bs-target={`#pills-${tab}`}
                    type="button"
                    role="tab"
                    aria-controls={`pills-${tab}`}
                    aria-selected={activeTab === tab}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12">
            <div className="tab-content" id="pills-tabContent">
              {tabs.map(tab => renderTabContent(tab))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Dummy data
const dummyCars = [
    // Budget category
    { name: 'Under 5 Lakh', category: 'Budget' },
    { name: 'Under 6 Lakh', category: 'Budget' },
    { name: 'Under 7 Lakh', category: 'Budget' },
    { name: 'Under 8 Lakh', category: 'Budget' },
    { name: 'Under 9 Lakh', category: 'Budget' },
    { name: 'Under 10 Lakh', category: 'Budget' },
    { name: 'Under 15 Lakh', category: 'Budget' },
    { name: 'Under 20 Lakh', category: 'Budget' },
    { name: 'Under 25 Lakh', category: 'Budget' },
    { name: 'Under 30 Lakh', category: 'Budget' },
    { name: 'Under 35 Lakh', category: 'Budget' },
    { name: 'Luxury Cars', category: 'Budget' },
    // Body Type category
    { name: 'Sedan', image: 'body-type/sedan.png', category: 'Body' },
    { name: 'Compact', image: 'body-type/compact.png', category: 'Body' },
    { name: 'SUV', image: 'body-type/suv.png', category: 'Body' },
    { name: 'Convertible', image: 'body-type/convertible.png', category: 'Body' },
    { name: 'Crossover', image: 'body-type/crossover.png', category: 'Body' },
    { name: 'Wagon', image: 'body-type/wagon.png', category: 'Body' },
    { name: 'Sports', image: 'body-type/sports.png', category: 'Body' },
    { name: 'Pickup', image: 'body-type/pickup.png', category: 'Body' },
    { name: 'Family MPV', image: 'body-type/mpv.png', category: 'Body' },
    { name: 'Coupe', image: 'body-type/coupe.png', category: 'Body' },
    { name: 'Electric', image: 'body-type/electric.png', category: 'Body' },
    { name: 'Luxury', image: 'body-type/luxury.png', category: 'Body' },
    // Fuel Type category
    { name: 'Petrol', image: 'fuel-type/petrol.png', category: 'Fuel' },
    { name: 'Diesel', image: 'fuel-type/diesel.png', category: 'Fuel' },
    { name: 'CNG', image: 'fuel-type/cng.png', category: 'Fuel' },
    { name: 'Electric', image: 'fuel-type/electric.png', category: 'Fuel' },
    { name: 'Hybrid', image: 'fuel-type/hybrid.png', category: 'Fuel' },
    // Transmission category
    { name: 'Manual', image: 'transmission/manual.png', category: 'Transmission' },
    { name: 'Automatic', image: 'transmission/automatic.png', category: 'Transmission' },
    // Seating category
    { name: '5 Seater', image: 'seating-capacity/seat.png', category: 'Seating' },
    { name: '6 Seater', image: 'seating-capacity/seat.png', category: 'Seating' },
    { name: '7 Seater', image: 'seating-capacity/seat.png', category: 'Seating' },
    { name: '8 Seater', image: 'seating-capacity/seat.png', category: 'Seating' },
];

// Usage
const App = () => (
  <div>
    <CarTypes cars={dummyCars} />
  </div>
);

export default App;
