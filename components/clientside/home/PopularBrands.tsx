import React from 'react';


const carData = [
    { id: 1, imgSrc: 'brands.png', alt: 'brands' },
    { id: 2, imgSrc: 'brands.png', alt: 'brands' },
    { id: 3, imgSrc: 'brands.png', alt: 'brands' },
    { id: 4, imgSrc: 'brands.png', alt: 'brands' },
    { id: 5, imgSrc: 'brands.png', alt: 'brands' },
    { id: 6, imgSrc: 'brands.png', alt: 'brands' },
    { id: 7, imgSrc: 'brands.png', alt: 'brands' },
    { id: 8, imgSrc: 'brands.png', alt: 'brands' },
    { id: 9, imgSrc: 'brands.png', alt: 'brands' },
    { id: 10, imgSrc: 'brands.png', alt: 'brands' },
    { id: 11, imgSrc: 'brands.png', alt: 'brands' },
    { id: 12, imgSrc: 'brands.png', alt: 'brands' },
  ];
  
const PopularBrands = () => {
    return (
        <section className="popular-brands py-50 px-0 bg-light">
            <div className="container">
                <div className="d-flex align-items-center">
                    <h5 className="page-title">Popular brands</h5>
                    <div className="ms-auto">
                        <a href="javascript:void(0);" className="text-center text-decoration-none">View More Brands <i className="fa fa-long-arrow-right"></i></a>
                    </div>
                </div>
                <div className="row mt-4">
                    {carData.map((car) => (
                    <div key={car.id} className="col-md-2 col-lg-2 col-xl-2 col-sm-12">
                        <div className="car-box shadow p-4 text-left bg-white mb-2">
                            <div className="image-container">
                                <img src={car.imgSrc} alt={car.alt} className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularBrands;
