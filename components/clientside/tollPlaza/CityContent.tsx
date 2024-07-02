"use client";

import React, { useState } from 'react'
import WideAd from '@/components/advertisements/widead'



type City = {
    name: string;
    nh: string;
    section: string;
};

const CityContent = ({ params }: { params: { slug: string } }) => {
    console.log(params);
    const { slug } = params;
    return (
        <>
            <div className="row mt-4">
                <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                    <section>
                        <div className="container">
                            <div className="d-flex align-items-center">
                                <h5 className="page-title me-2">Indore Dewas (Indore Bypass) Toll Gate Charges </h5>
                            </div>
                            <div className="toll-booth-imformation">
                                <div className="row">
                                    <div className="col-md-4">
                                        <ul className="list-unstyled bordered">
                                            <li className="d-flex justify-content-between align-items-center">
                                                <span className="left-part d-flex align-items-center">
                                                    <img src="/location.png" className="img-fluid me-1" /> Location
                                                </span>
                                                <span className="right-part">NH-3</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4">
                                        <ul className="list-unstyled bordered">
                                            <li className="d-flex justify-content-between align-items-center">
                                                <span className="left-part d-flex align-items-center">
                                                    <img src="/stretch.png" className="img-fluid me-1" /> Stretch
                                                </span>
                                                <span className="right-part">Indore - Dewas</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4">
                                        <ul className="list-unstyled bordered">
                                            <li className="d-flex justify-content-between align-items-center">
                                                <span className="left-part d-flex align-items-center">
                                                    <img src="/toll-distance.png" className="img-fluid me-1" /> Tollable Distance
                                                </span>
                                                <span className="right-part">45.6 Km(s)</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <p className="page-content">Here is the information on Indore Dewas (Indore Bypass) Toll Booth Rates for different types of vehicles, including one-way and return journey fees, as well as monthly pass charges</p>
                        </div>
                    </section>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                    <WideAd img_url="/ads2.png" />
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="container">
                        <section className="toll-plaza-list-wrapper mb-4">
                            <p className="fz-14 text-muted fw-400 mb-0">Fee Effective Date : 01-April-2023 / Due date of toll revision : 31-March-2024</p>
                            <h5 className="section-title mb-1">All Cities List of Toll Plaza in state</h5>
                            <p className="fz-14 text-muted fw-400">Top cities in state</p>
                            <div className="table-responsive toll-plaza-table">
                                <table className="table table-striped">
                                    <thead>
                                        <tr className="bg-secondary text-white fw-400">
                                            <th>Type of Vehicle</th>
                                            <th>Single Journey</th>
                                            <th>Return Journey</th>
                                            <th>Monthly Pass</th>
                                            <th>Commercial vehicle reg. within the district of plaza</th>    
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><a href="#" className="text-primary text-decoration-none">Car/Jeep/Van</a></td>
                                            <td>65.00</td>
                                            <td>95.00</td>  
                                            <td>2145.00</td>
                                            <td>-</td> 
                                        </tr>
                                        <tr>
                                            <td><a href="#" className="text-primary text-decoration-none">LCV</a></td>
                                            <td>105.00</td>
                                            <td>155.00</td>  
                                            <td>3470.00</td>
                                            <td>-</td> 
                                        </tr>
                                        <tr>
                                            <td><a href="#" className="text-primary text-decoration-none">Bus/Truck</a></td>
                                            <td>220.00</td>
                                            <td>325.00</td>  
                                            <td>7265.00</td>
                                            <td>-</td> 
                                        </tr>
                                        <tr>
                                            <td><a href="#" className="text-primary text-decoration-none">Upto 3 Axle Vehicle</a></td>
                                            <td>340.00</td>
                                            <td>515.00</td>  
                                            <td>11395.00</td>
                                            <td>-</td> 
                                        </tr>
                                        <tr>
                                            <td><a href="#" className="text-primary text-decoration-none">4 to 6 Axie</a></td>
                                            <td>340.00</td>
                                            <td>515.00</td>  
                                            <td>11395.00</td>
                                            <td>-</td>  
                                        </tr>
                                        <tr>
                                            <td><a href="#" className="text-primary text-decoration-none">HCM/EME</a></td>
                                            <td>340.00</td>
                                            <td>515.00</td>  
                                            <td>11400.00</td>
                                            <td>175.00</td> 
                                        </tr>
                                        <tr>
                                            <td><a href="#" className="text-primary text-decoration-none">7 or more Axie</a></td>
                                            <td>415.00</td>
                                            <td>625.00</td>  
                                            <td>13870.00</td>
                                            <td>-</td> 
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="container">
                        <section className="facility-wrapper mb-4">
                            <h5 className="section-title">Facilities Available Near Indore Dewas (Indore Bypass) Toll Plaza</h5>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="d-flex align-items-center">
                                        <div className="img-container me-2 px-4 py-4">
                                            <img src="/rest-areas.png" className="img-fluid w-100 h-100" />  
                                        </div>
                                        <div>
                                            <h5 className="mb-0 title">Rest Areas</h5>
                                            <p className="mb-0 sub-title">Nil</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="d-flex align-items-center">
                                        <div className="img-container me-2 px-3 py-4">
                                            <img src="/lay-byes.png" className="img-fluid w-100 h-100" />     
                                        </div>
                                        <div>
                                            <h5 className="mb-0 title">Truck Lay Byes</h5>
                                            <p className="mb-0 sub-title">Nil</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="d-flex align-items-center">
                                        <div className="img-container me-2 px-3 py-4">
                                            <img src="/weigh-bridge.png" className="img-fluid w-100 h-100" />     
                                        </div>
                                        <div>
                                            <h5 className="mb-0 title">Weigh Bridge</h5>
                                            <p className="mb-0 sub-title">Nil</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="container">
                        <section className="map-wrapper mb-4">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src="/car-camera.png" alt="Car" className="img-fluid w-100 h-100" />     
                                </div>
                                <div className="col-md-8">
                                    <div className="map-box">
                                        <div id="google-maps-canvas">
                                            <iframe className="iframe" src="https://www.google.com/maps/embed/v1/place?q=atulya+it+park&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="container">
                        <section className="toll-booth-imformation mb-4">
                            <div className="row">
                                <div className="col-md-12">
                                    <ul className="list-unstyled bordered">
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span className="left-part">Date of fee notification:</span>
                                            <span className="right-part">10 Jun, 2011</span>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span className="left-part">Commercial Operation date:</span>
                                            <span className="right-part">01 Sep, 2011</span>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span className="left-part">Fee Rule:</span>
                                            <span className="right-part">2008</span>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span className="left-part">Capital Cost of Project (In.Rs CR.):</span>
                                            <span className="right-part">325.00</span>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span className="left-part">Concession Period:</span>
                                            <span className="right-part">01 Sep, 2011 to 31 July, 2036</span>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span className="left-part">Design Capacity (PCU):</span>
                                            <span className="right-part">6600</span>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span className="left-part">Traffic (PCU/Day):</span>
                                            <span className="right-part">34246 As on : 01 Oct, 2016</span>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span className="left-part">Name of concessionaire /OMT Contractor:</span>
                                            <span className="right-part">M/s Indore Dewas Tollways Limited</span>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span className="left-part">Name /Contact Detail of Incharge:</span>
                                            <span className="right-part">Mr C.V.S Ramarao / 7898987789</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="container">
                        <section className="toll-booth-imformation">
                            <div className="row">
                                <div className="col-md-12">
                                    <h5 className="section-title">Indore Dewas (Indore Bypass) Toll Booth Important Information</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <ul className="list-unstyled bordered">
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span className="left-part">Helpline No:</span>
                                            <span className="right-part">Crane - 7313290115, Ambulance - 7313290115, Route Patrol - 7313290115</span>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span className="left-part">Emergency Services:</span>
                                            <span className="right-part">1033</span>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span className="left-part">Nearest Police Station:</span>
                                            <span className="right-part">Kshipra Thana / 7272282225</span>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span className="left-part">Project Implementation Unit (PIU):</span>
                                            <span className="right-part">PIU Indore</span>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span className="left-part">Highway Administrator ( Project Director):</span>
                                            <span className="right-part">Sh. Sumesh Banza / 8130006193</span>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span className="left-part">Regional Office (RO):</span>
                                            <span className="right-part">RO Bhopal</span>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span className="left-part">Representative of Consultant:</span>
                                            <span className="right-part">Mr Anil Chaturvedi</span>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span className="left-part">Representative of Concessionaire:</span>
                                            <span className="right-part">Mr A.P. Pandy / 7898987781</span>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span className="left-part">Nearest Hospital (s):</span>
                                            <span className="right-part">1.) Gurjar Hospital: 9926680663, ( 2.) Akash Hospital: 07312847034</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="container">
                        <section className="similar-toll-plaza mt-4">
                            <h5 className="section-title">Similar Toll Plazas</h5>
                            <div className="row">
                                <div className="col-md-4">
                                    <ul className="list-unstyled">
                                        <li className="fz-14 mb-3 text-primary cursor-pointer"><span>Toll Plazas in</span></li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <ul className="list-unstyled" >
                                        <li className="fz-14 mb-3 text-primary cursor-pointer"><span>Toll Plazas in</span></li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <ul className="list-unstyled" >
                                        <li className="fz-14 mb-3 text-primary cursor-pointer"><span>Toll Plazas in</span></li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CityContent;
