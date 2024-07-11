"use client";

import React, { useState } from 'react'
import WideAd from '@/components/advertisements/widead'
import ChangeStateModal from '@/components/modal/ChangeStateModal'; 
import Link from "next/link";

interface Props {
    tolls:[{
        name: string;
        sectiosStretch: string; 
        nhNo:string;
        city_slug:string;
    }];
    slug:string;
}
type City = {
    name: string;
    nhNo: string;
    sectiosStretch: string;
    city_slug:string;
};

function formatString(str: string): string {
    return str
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
}

const StateContent = (tolls:Props) => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [cities, setCities] = useState<City[]>(tolls.tolls);
    const [visibleCities, setVisibleCities] = useState<number>(5);
    const [showMore, setShowMore] = useState<boolean>(false); 
    const [searchTerm, setSearchTerm] = useState<string>('');

    const toggleCities = () => {
        setVisibleCities(showMore ? 5 :cities.length);
        setShowMore(!showMore);
    };
    const handleModalClose = () => setModalOpen(false);
    const filteredCities = cities.filter(city =>
        city.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div>
            <div className="row mt-4">
                <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                    <section>
                        <div className="container">
                            <div className="d-flex align-items-center">
                                <h5 className="page-title me-2">{formatString(tolls.slug)} </h5>
                                <a 
                                    href="#" 
                                    className="text-decoration-none text-primary fz-14" 
                                    onClick={() => setModalOpen(true)}
                                >
                                    <i className="fa fa-pencil"></i> Change State
                                </a>
                                <ChangeStateModal show={modalOpen} handleClose={handleModalClose} onSearch={function (state: string): void {
                                    throw new Error('Function not implemented.');
                                    } } />
                            </div>
                            <p className="page-content">
                                The toll gates in {formatString(tolls.slug)} are the check points wherein the passersby will have to stop and pay the toll fee to the concerned officials. The toll tax is collected from the toll plazas with the sole purpose of recouping the construction and maintenance costs incurred in maintaining the toll roads or toll bridges or highway roads or tollways.
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
                                            <h5 className="mb-0">All cities with toll plazas in {formatString(tolls.slug)}</h5>
                                            <small>Top Tolls in {formatString(tolls.slug)}</small>
                                        </div>
                                        <div className="ms-auto w-25">
                                            <div className="form-group position-relative">
                                            <input
                                                    type="text"
                                                    id="search"
                                                    className="form-control"
                                                    placeholder={`Search ${formatString(tolls.slug)} Toll Plaza`}
                                                    value={searchTerm}
                                                    onChange={e => setSearchTerm(e.target.value)}
                                                    />
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
                                            {filteredCities.length > 0 ? (
                                                filteredCities.slice(0, visibleCities).map((city, index) => (
                                                <tr key={index}>
                                                    <td>
                                                    <Link href={`/toll-plaza/${tolls.slug}/${city.city_slug}`}>
                                                        {formatString(city.name)}
                                                    </Link>
                                                    </td>
                                                    <td>NH-{city.nhNo}</td>
                                                    <td>{city.sectiosStretch}</td>
                                                </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                <td colSpan={3} style={{ textAlign: 'center' }}>
                                                    No tolls available
                                                </td>
                                                </tr>
                                            )}
                                            </tbody>
                                        </table>
                                    </div>
                                    {filteredCities.length > 4 && (
                                        <div className="text-center">
                                            <button className="btn btn-primary p-2" onClick={toggleCities}>
                                                {showMore ? 'Show Less Cities' : 'Load More Cities'}
                                            </button>
                                        </div>
                                    )}
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
