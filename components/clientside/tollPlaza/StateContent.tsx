"use client";

import React, { useState } from 'react'
import WideAd from '@/components/advertisements/widead'



type City = {
    name: string;
    nh: string;
    section: string;
};

const StateContent = ({ params }: { params: { slug: string } }) => {
    console.log(params);
    const { slug } = params;
    const [isModalOpen, setModalOpen] = useState<boolean>(false);
    const [cities, setCities] = useState<City[]>([
        { name: 'Allonia', nh: 'NH-7', section: 'Km 567.550 to Km 624.480 (Lakhnadon Seoni MP Border)' },
        { name: 'Allonia', nh: 'NH-7', section: 'Km 567.550 to Km 624.480 (Lakhnadon Seoni MP Border)' },
        { name: 'Allonia', nh: 'NH-7', section: 'Km 567.550 to Km 624.480 (Lakhnadon Seoni MP Border)' },
        { name: 'Allonia', nh: 'NH-7', section: 'Km 567.550 to Km 624.480 (Lakhnadon Seoni MP Border)' },
        { name: 'Allonia', nh: 'NH-7', section: 'Km 567.550 to Km 624.480 (Lakhnadon Seoni MP Border)' },
        { name: 'Allonia', nh: 'NH-7', section: 'Km 567.550 to Km 624.480 (Lakhnadon Seoni MP Border)' },
        { name: 'Allonia', nh: 'NH-7', section: 'Km 567.550 to Km 624.480 (Lakhnadon Seoni MP Border)' },
        { name: 'Allonia', nh: 'NH-7', section: 'Km 567.550 to Km 624.480 (Lakhnadon Seoni MP Border)' },
        { name: 'Allonia', nh: 'NH-7', section: 'Km 567.550 to Km 624.480 (Lakhnadon Seoni MP Border)' },
    ]);
    const [visibleCities, setVisibleCities] = useState<number>(5);
    const [showMore, setShowMore] = useState<boolean>(false);

    const toggleCities = () => {
        if (showMore) {
            setVisibleCities(5);
        } else {
            setVisibleCities(cities.length); // Show all cities
        }
        setShowMore(!showMore);
    };

    return (
        <div>
            <div className="row mt-4">
                <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                    <section>
                        <div className="container">
                            <div className="d-flex align-items-center">
                                <h5 className="page-title me-2">Madhya Pradesh </h5>
                                <a 
                                    href="#" 
                                    className="text-decoration-none text-primary fz-14" 
                                    onClick={() => setModalOpen(true)}
                                >
                                    <i className="fa fa-pencil"></i> Change State
                                </a>
                            </div>
                            <p className="page-content">
                                The toll gates in Madhya Pradesh are the check points wherein the passersby will have to stop and pay the toll fee to the concerned officials. The toll tax is collected from the toll plazas with the sole purpose of recouping the construction and maintenance costs incurred in maintaining the toll roads or toll bridges or highway roads or tollways.
                            </p>
                        </div>
                    </section>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                    <WideAd img_url="/ads2.png" />
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="container">
                        <div className="card">
                            <div className="card-body">
                                <section className="city-list-wrapper">
                                    <div className="d-md-flex align-items-center">
                                        <div className="w-75">
                                            <h5 className="mb-0">All Cities List of Toll Plaza in Andaman and Nicobar Islands</h5>
                                            <small>Top cities in Andaman and Nicobar Islands</small>
                                        </div>
                                        <div className="ms-auto w-25">
                                            <div className="form-group position-relative">
                                                <input type="text" id="search" className="form-control" placeholder="Search Madhya Pradesh Toll Plaza" />
                                                <img src="/search-black.png" className="img-fluid position-absolute r-3 t-10" alt="search icon" />
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive city-list-table mt-2">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr className="bg-secondary text-white fw-400">
                                                    <th>Name</th>
                                                    <th>NH-No</th>
                                                    <th>Section</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cities.slice(0, visibleCities).map((city, index) => (
                                                    <tr key={index}>
                                                        <td>{city.name}</td>
                                                        <td>{city.nh}</td>
                                                        <td>{city.section}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="text-center">
                                        <button className="btn btn-primary p-2" onClick={toggleCities}>
                                            {showMore ? 'Show Less Cities' : 'Load More Cities'}
                                        </button>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StateContent;
