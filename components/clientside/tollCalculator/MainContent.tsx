"use client";

import React, { useState ,useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaRegCalendarDays, FaClock } from "react-icons/fa6";

const tollCalculators = [
    "Tamil-Nadu",
    "Delhi",
    "Goa",
    "Gujarat",
    "Karnataka",
    "Kerala",
    "Andaman-And-Nicobar",
    "Andhra-Pradesh",
    "Arunachal-Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Jaipur",
    "Haryana",
];

export default function MainContent() {
    return (
        <div>
            <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                    <section>
                        <div className="container">
                            <h5 className="page-title">India Toll Calculator – Google Maps with Tolls & Fuel</h5>
                            <p className="page-content">Plan your journey with India TollGuru Calculator: Compare routes and optimize for cost or time efficiency with exact toll cost estimates.</p>

                            <p className="page-content">Calculate toll charges, fuel costs, and routes for your trip across India using the TollGuru Toll Calculator. Get accurate breakdowns for all vehicle types,including cars, trucks, and buses for each India national and state highway, toll roads, bridges, and tunnels. Find the fastest or most cost-effective route with our FasTag and NHAI toll calculator. Business? Integrate Toll API for pre-trip, on-trip and post-trip toll and route information.</p>

                            <p className="page-content">Plan your trip for free: Enter start point, destination, vehicle type and payment method. The toll calculator provides a toll breakdown, total toll costs, fuel estimates and- including cash rates and FasTag. Fill the optional fields - mileage, toll tags etc. - to get more accurate result.</p>
                        </div>
                    </section>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="container">
                        <section className="bg-primary mt-4 br-12 pos-rel">
                            <div className="tabs-wrapper">
                                <h6 className="fw-400">Select Vehicle Type</h6>
                                <ul className="nav nav-pills mb-0 nav-justified" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active fz-12" id="pills-car-tab" data-bs-toggle="pill" data-bs-target="#pills-car" type="button" role="tab" aria-controls="pills-car" aria-selected="true">
                                            <Image
                                                src="/car-2.svg"
                                                className="img-fluid"
                                                alt="car"
                                                width={19} // Provide appropriate width
                                                height={19} // Provide appropriate height
                                            /><br />
                                            Car, Jeep, Van, SUV
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link fz-12" id="pills-pickup-tab" data-bs-toggle="pill" data-bs-target="#pills-pickup" type="button" role="tab" aria-controls="pills-pickup" aria-selected="false">
                                            <Image
                                                src="/pickup.png"
                                                className="img-fluid"
                                                alt="car"
                                                width={19} // Provide appropriate width
                                                height={19} // Provide appropriate height
                                            /><br />
                                            Pickup truck, LCV
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link fz-12" id="pills-truck-tab" data-bs-toggle="pill" data-bs-target="#pills-truck" type="button" role="tab" aria-controls="pills-truck" aria-selected="false">
                                            <Image
                                                src="/truck.png"
                                                className="img-fluid"
                                                alt="car"
                                                width={19} // Provide appropriate width
                                                height={19} // Provide appropriate height
                                            /><br />
                                            Truck
                                        </button>
                                    </li>

                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link fz-12" id="pills-bus-tab" data-bs-toggle="pill" data-bs-target="#pills-bus" type="button" role="tab" aria-controls="pills-bus" aria-selected="true">
                                            <Image
                                                src="/bus.png"
                                                className="img-fluid"
                                                alt="car"
                                                width={19} // Provide appropriate width
                                                height={19} // Provide appropriate height
                                            /><br />
                                            Bus
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link fz-12" id="pills-hcm-tab" data-bs-toggle="pill" data-bs-target="#pills-hcm" type="button" role="tab" aria-controls="pills-hcm" aria-selected="false">
                                            <Image
                                                src="/hcm.png"
                                                className="img-fluid"
                                                alt="car"
                                                width={19} // Provide appropriate width
                                                height={19} // Provide appropriate height
                                            /><br />
                                            HCM, EME
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link fz-12" id="pills-taxi-tab" data-bs-toggle="pill" data-bs-target="#pills-taxi" type="button" role="tab" aria-controls="pills-taxi" aria-selected="false">
                                            <Image
                                                src="/taxi.png"
                                                className="img-fluid"
                                                alt="car"
                                                width={19} // Provide appropriate width
                                                height={19} // Provide appropriate height
                                            /><br />
                                            Taxi
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="journey-details">
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-car" role="tabpanel" aria-labelledby="pills-car-tab">
                                        <form className="tourmaster-form-field">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <label className="title">Enter Location</label>
                                                        <div className="field-inner">
                                                            <input name="location" type="text" className="form-control" placeholder="Enter location" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <label className="title">Enter Destination Location</label>
                                                        <div className="field-inner">
                                                            <input name="destination" type="text" className="form-control" placeholder="Enter destination" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <div className="d-flex align-items-center">
                                                            <div>
                                                                <label className="title">Departure Date</label>
                                                                <div className="field-inner">
                                                                    <input name="date" type="text" className="form-control" placeholder="Enter date" />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <FaRegCalendarDays className="fz-35" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <div className="d-flex align-items-center">
                                                            <div>
                                                                <label className="title">Departure Time</label>
                                                                <div className="field-inner">
                                                                    <input name="time" type="text" className="form-control" placeholder="Enter time" />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <FaClock className="fz-35" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        <div className="row">
                                            <div className="col-md-12 col-sm-12 col-lg-2 col-xl-2 col-xxl-2">
                                                <a href="javascript:void(0);" className="text-white mt-2 d-block">+ Add Destination</a>
                                            </div>
                                            <div className="col-md-12 col-sm-12 col-lg-2 col-xl-2 col-xxl-2">
                                                <a href="javascript:void(0);" className="text-white mt-2 d-block">+ Optional Fuel Info</a>
                                            </div>
                                            <div className="col-md-12 col-sm-12 col-lg-8 col-xl-8 col-xxl-8 text-right">
                                                <button className="btn btn-outline-theme mt-2">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-pickup" role="tabpanel" aria-labelledby="pills-pickup-tab">
                                        <form className="tourmaster-form-field">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <label className="title">Enter Location</label>
                                                        <div className="field-inner">
                                                            <input name="location" type="text" className="form-control" placeholder="Enter location" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <label className="title">Enter Destination Location</label>
                                                        <div className="field-inner">
                                                            <input name="destination" type="text" className="form-control" placeholder="Enter destination" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <div className="d-flex align-items-center">
                                                            <div>
                                                                <label className="title">Departure Date</label>
                                                                <div className="field-inner">
                                                                    <input name="date" type="text" className="form-control" placeholder="Enter date" />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <FaRegCalendarDays className="fz-35" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <div className="d-flex align-items-center">
                                                            <div>
                                                                <label className="title">Departure Time</label>
                                                                <div className="field-inner">
                                                                    <input name="time" type="text" className="form-control" placeholder="Enter time" />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <FaClock className="fz-35" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        <div className="row">
                                            <div className="col-md-12 col-sm-12 col-lg-2 col-xl-2 col-xxl-2">
                                                <a href="javascript:void(0);" className="text-white mt-2 d-block">+ Add Destination</a>
                                            </div>
                                            <div className="col-md-12 col-sm-12 col-lg-2 col-xl-2 col-xxl-2">
                                                <a href="javascript:void(0);" className="text-white mt-2 d-block">+ Optional Fuel Info</a>
                                            </div>
                                            <div className="col-md-12 col-sm-12 col-lg-8 col-xl-8 col-xxl-8 text-right">
                                                <button className="btn btn-outline-theme mt-2">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-truck" role="tabpanel" aria-labelledby="pills-truck-tab">
                                        <form className="tourmaster-form-field">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <label className="title">Enter Location</label>
                                                        <div className="field-inner">
                                                            <input name="location" type="text" className="form-control" placeholder="Enter location" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <label className="title">Enter Destination Location</label>
                                                        <div className="field-inner">
                                                            <input name="destination" type="text" className="form-control" placeholder="Enter destination" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <div className="d-flex align-items-center">
                                                            <div>
                                                                <label className="title">Departure Date</label>
                                                                <div className="field-inner">
                                                                    <input name="date" type="text" className="form-control" placeholder="Enter date" />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <FaRegCalendarDays className="fz-35" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <div className="d-flex align-items-center">
                                                            <div>
                                                                <label className="title">Departure Time</label>
                                                                <div className="field-inner">
                                                                    <input name="time" type="text" className="form-control" placeholder="Enter time" />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <FaClock className="fz-35" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        <div className="row">
                                            <div className="col-md-12 col-sm-12 col-lg-2 col-xl-2 col-xxl-2">
                                                <a href="javascript:void(0);" className="text-white mt-2 d-block">+ Add Destination</a>
                                            </div>
                                            <div className="col-md-12 col-sm-12 col-lg-2 col-xl-2 col-xxl-2">
                                                <a href="javascript:void(0);" className="text-white mt-2 d-block">+ Optional Fuel Info</a>
                                            </div>
                                            <div className="col-md-12 col-sm-12 col-lg-8 col-xl-8 col-xxl-8 text-right">
                                                <button className="btn btn-outline-theme mt-2">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-bus" role="tabpanel" aria-labelledby="pills-bus-tab">
                                        <form className="tourmaster-form-field">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <label className="title">Enter Location</label>
                                                        <div className="field-inner">
                                                            <input name="location" type="text" className="form-control" placeholder="Enter location" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <label className="title">Enter Destination Location</label>
                                                        <div className="field-inner">
                                                            <input name="destination" type="text" className="form-control" placeholder="Enter destination" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <div className="d-flex align-items-center">
                                                            <div>
                                                                <label className="title">Departure Date</label>
                                                                <div className="field-inner">
                                                                    <input name="date" type="text" className="form-control" placeholder="Enter date" />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <FaRegCalendarDays className="fz-35" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <div className="d-flex align-items-center">
                                                            <div>
                                                                <label className="title">Departure Time</label>
                                                                <div className="field-inner">
                                                                    <input name="time" type="text" className="form-control" placeholder="Enter time" />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <FaClock className="fz-35" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        <div className="row">
                                            <div className="col-md-12 col-sm-12 col-lg-2 col-xl-2 col-xxl-2">
                                                <a href="javascript:void(0);" className="text-white mt-2 d-block">+ Add Destination</a>
                                            </div>
                                            <div className="col-md-12 col-sm-12 col-lg-2 col-xl-2 col-xxl-2">
                                                <a href="javascript:void(0);" className="text-white mt-2 d-block">+ Optional Fuel Info</a>
                                            </div>
                                            <div className="col-md-12 col-sm-12 col-lg-8 col-xl-8 col-xxl-8 text-right">
                                                <button className="btn btn-outline-theme mt-2">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-hcm" role="tabpanel" aria-labelledby="pills-hcm-tab">
                                        <form className="tourmaster-form-field">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <label className="title">Enter Location</label>
                                                        <div className="field-inner">
                                                            <input name="location" type="text" className="form-control" placeholder="Enter location" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <label className="title">Enter Destination Location</label>
                                                        <div className="field-inner">
                                                            <input name="destination" type="text" className="form-control" placeholder="Enter destination" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <div className="d-flex align-items-center">
                                                            <div>
                                                                <label className="title">Departure Date</label>
                                                                <div className="field-inner">
                                                                    <input name="date" type="text" className="form-control" placeholder="Enter date" />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <FaRegCalendarDays className="fz-35" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <div className="d-flex align-items-center">
                                                            <div>
                                                                <label className="title">Departure Time</label>
                                                                <div className="field-inner">
                                                                    <input name="time" type="text" className="form-control" placeholder="Enter time" />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <FaClock className="fz-35" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        <div className="row">
                                            <div className="col-md-12 col-sm-12 col-lg-2 col-xl-2 col-xxl-2">
                                                <a href="javascript:void(0);" className="text-white mt-2 d-block">+ Add Destination</a>
                                            </div>
                                            <div className="col-md-12 col-sm-12 col-lg-2 col-xl-2 col-xxl-2">
                                                <a href="javascript:void(0);" className="text-white mt-2 d-block">+ Optional Fuel Info</a>
                                            </div>
                                            <div className="col-md-12 col-sm-12 col-lg-8 col-xl-8 col-xxl-8 text-right">
                                                <button className="btn btn-outline-theme mt-2">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-taxi" role="tabpanel" aria-labelledby="pills-taxi-tab">
                                        <form className="tourmaster-form-field">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <label className="title">Enter Location</label>
                                                        <div className="field-inner">
                                                            <input name="location" type="text" className="form-control" placeholder="Enter location" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <label className="title">Enter Destination Location</label>
                                                        <div className="field-inner">
                                                            <input name="destination" type="text" className="form-control" placeholder="Enter destination" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <div className="d-flex align-items-center">
                                                            <div>
                                                                <label className="title">Departure Date</label>
                                                                <div className="field-inner">
                                                                    <input name="date" type="text" className="form-control" placeholder="Enter date" />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <FaRegCalendarDays className="fz-35" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <div className="d-flex align-items-center">
                                                            <div>
                                                                <label className="title">Departure Time</label>
                                                                <div className="field-inner">
                                                                    <input name="time" type="text" className="form-control" placeholder="Enter time" />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <FaClock className="fz-35" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        <div className="row">
                                            <div className="col-md-12 col-sm-12 col-lg-2 col-xl-2 col-xxl-2">
                                                <a href="javascript:void(0);" className="text-white mt-2 d-block">+ Add Destination</a>
                                            </div>
                                            <div className="col-md-12 col-sm-12 col-lg-2 col-xl-2 col-xxl-2">
                                                <a href="javascript:void(0);" className="text-white mt-2 d-block">+ Optional Fuel Info</a>
                                            </div>
                                            <div className="col-md-12 col-sm-12 col-lg-8 col-xl-8 col-xxl-8 text-right">
                                                <button className="btn btn-outline-theme mt-2">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="container">
                        <div className="map-wrapper">
                            <div id="embed-ded-map-canvas">
                                <iframe src="https://www.google.com/maps/embed/v1/place?q=atulya+it+park+khandwa+road&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
                            </div>
                        </div>
                        <p className="page-content mt-2">The Toll Plaza toll calculator offers comprehensive coverage of all major Indian toll roads - including the Mumbai-Pune Expressway, Golden Quadrilateral, NH 44(Grand Trunk Road) National Highway(connects Srinagar, Jammu and Kashmir to Kanyakumari, Tamil Nadu), NH 1(Delhi to Chennai), NH 5(Chennai to Kolkata), NH 27(Porbandar to Silchar), Eastern Peripheral Expressway, Atal Tunnel Rohtang, Indian National Highway 52 (NH 52) and regional state highways. Get personalized toll pricing for cars, trucks, buses, two-wheelers, and commercial vehicles.</p>
                    </div>
                </div>
            </div> 

            <div className="row mt-4">
                <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-lg-6 col-xl-6 col-xxl-6">
                                <div className="bg-primary p-4 min-h-287">
                                    <h5 className="section-title text-white">Features</h5>
                                    <ul className="ml--14">
                                        <li className="text-white">Cost breakdown (tolls, gas etc)</li>
                                        <li className="text-white">Toll plazas on map</li>
                                        <li className="text-white">Toll rates for all plazas</li>
                                        <li className="text-white">Cheapest and Fastest routes</li>
                                        <li className="text-white">Reorder stops (Traveling salesman problem)</li>
                                        <li className="text-white">Truck-compliant route</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-12 col-sm-12 col-lg-6 col-xl-6 col-xxl-6">
                                <div className="bg-white p-4 shadow min-h-287">
                                    <h5 className="section-title text-black">India Toll Guide</h5>
                                    <ul className="ml--14">
                                        <li className="text-black">How are Indian tolls calculated?</li>
                                        <li className="text-black">How many toll gates are there in India?</li>
                                        <li className="text-black">What are the toll rules in India?</li>
                                        <li className="text-black">Is toll free for local residents in India?</li>
                                        <li className="text-black">Is FasTag mandatory in India?</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="container">
                        <section className="what-toll-tax-section p-4 bg-black">
                            <h5 className="section-title text-white">Other toll calculators</h5>
                            <ul className="inline-block mt-2 toll-calculator">
                                {tollCalculators.map((state) => (
                                    <li key={state} className="inline-block mb-2">
                                        <Link href="">
                                            {state} Toll Calculator
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}