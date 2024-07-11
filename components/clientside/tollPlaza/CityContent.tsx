"use client";

import React, { useState } from 'react'
import WideAd from '@/components/advertisements/widead'  

interface Props {
    tolldata:Toll;
}
type Toll = {
    name: string;
    nhNo: string;
    sectiosStretch: string;
    city_slug:string; 
    rest_areas:string;
    tollable_length:string;
    fee_effective_date:string;
    due_date_of_toll_revision:string;
    truck_lay_byes:string;
    static_weigh_bridge:string;
    date_fee_notification:string;
    date_commercial_operation:string;
    fee_rule:string;
    capital_cost:string;
    concessions_period:string;
    design_capacity:string;
    target_traffic_per_day:string;
    project_implementation_unit:string;
    contractor_name:string;
    contact_details:string;
    nearest_hospital:string;
    helpline_no:string;
    nearest_police_station:string;
    highway_administrator:string;
    regional_office:string;
    representative_of_consultant:string;
    representative_of_concessionaire:string;
    emergency_services:string;
    lat:string;
    long:string;
    car:string;
    lcv:string;
    bus_truck:string;
    axle_vehi3:string;
    axle_vehi4to6:string;
    hcm_eme:string;
    axle_vehi7_to_more:string;
};

type Car = {
    car_single: string;
    car_multi: string;
    car_monthly: string;
    car_commercial: string;
};

type Lcv = {
    lcv_single: string;
    lcv_multi: string;
    lcv_monthly: string;
    lcv_commercial: string;
};

type Bustruck = {
    bus_truck_single: string;
    bus_truck_multi: string;
    bus_truck_monthly: string;
    bus_truck_commercial: string;
};
type Axlevehi3 = {
    axle_vehi3_single: string;
    axle_vehi3_multi: string;
    axle_vehi3_monthly: string;
    axle_vehi3_commercial: string;
};
 
type HcmEme = {
    hcm_eme_single: string;
    hcm_eme_multi: string;
    hcm_eme_monthly: string;
    hcm_eme_commercial: string;
};

type Axlevehi4to6 = {
    axle_vehi4to6_single: string;
    axle_vehi4to6_multi: string;
    axle_vehi4to6_monthly: string;
    axle_vehi4to6_commercial: string;
};


type Axlevehi7tomore = {
    axle_vehi7_to_more_single: string;
    axle_vehi7_to_more_multi: string;
    axle_vehi7_to_more_monthly: string;
    axle_vehi7_to_more_commercial: string;
};
 
const CityContent = ({tolldata}:Props) => {
    const [tollDetail, setTollData] = useState<Toll>(tolldata);
    const [carObject, setcarObject] = useState<Car>(JSON.parse(tolldata.car));
    const [lcvObject, setlcvObject] = useState<Lcv>(JSON.parse(tolldata.lcv));
    const [bustruckObject, setbustruckObject] = useState<Bustruck>(JSON.parse(tolldata.bus_truck));
    const [axlevehi3Object, set3axlevehi3Object] = useState<Axlevehi3>(JSON.parse(tolldata.axle_vehi3));
    const [hcmEmeObject, sethcmEmeObject] = useState<HcmEme>(JSON.parse(tolldata.hcm_eme));
    const [Axlevehi4to6Object, setAxlevehi4to6Object] = useState<Axlevehi4to6>(JSON.parse(tolldata.axle_vehi4to6)); 
    const [Axlevehi7tomoreObject, setAxlevehi7tomoreObject] = useState<Axlevehi7tomore>(JSON.parse(tolldata.axle_vehi7_to_more));
    
    
    return (
        <>
            <div className="row mt-4">
                <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                    <section>
                        <div className="container">
                            <div className="d-flex align-items-center">
                                <h5 className="page-title me-2">{tollDetail.name} Toll Gate Charges </h5>
                            </div>
                            <div className="toll-booth-imformation">
                                <div className="row">
                                    <div className="col-md-4">
                                        <ul className="list-unstyled bordered">
                                            <li className="d-flex justify-content-between align-items-center">
                                                <span className="left-part d-flex align-items-center">
                                                    <img src="/location.png" className="img-fluid me-1" /> Location
                                                </span>
                                                <span className="right-part">NH-{tollDetail.nhNo}</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4">
                                        <ul className="list-unstyled bordered">
                                            <li className="d-flex justify-content-between align-items-center">
                                                <span className="left-part d-flex align-items-center">
                                                    <img src="/stretch.png" className="img-fluid me-1" /> Stretch
                                                </span>
                                                <span className="right-part">{tollDetail.sectiosStretch}</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4">
                                        <ul className="list-unstyled bordered">
                                            <li className="d-flex justify-content-between align-items-center">
                                                <span className="left-part d-flex align-items-center">
                                                    <img src="/toll-distance.png" className="img-fluid me-1" /> Tollable Distance
                                                </span>
                                                <span className="right-part">{tollDetail.tollable_length}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <p className="page-content">Here is the information on {tollDetail.name} Toll Booth Rates for different types of vehicles, including one-way and return journey fees, as well as monthly pass charges</p>
                        </div>
                    </section>
                </div>
            </div>

           
            <WideAd img_url="/ads2.png" />
                 

            <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="container">
                        <section className="toll-plaza-list-wrapper mb-4">
                            <p className="fz-14 text-muted fw-400 mb-0">Fee Effective Date : {tollDetail.fee_effective_date} / Due date of toll revision :{tollDetail.due_date_of_toll_revision}</p>
                            {/* <h5 className="section-title mb-1">All Cities List of Toll Plaza in state</h5>
                            <p className="fz-14 text-muted fw-400">Top cities in state</p> */}
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
                                            <td>{carObject.car_single}</td>
                                            <td>{carObject.car_multi}</td>  
                                            <td>{carObject.car_monthly}</td>
                                            <td>{carObject.car_commercial}</td> 
                                        </tr>
                                        <tr>
                                            <td><a href="#" className="text-primary text-decoration-none">LCV</a></td>
                                            
                                            <td>{lcvObject.lcv_single}</td>
                                            <td>{lcvObject.lcv_multi}</td>  
                                            <td>{lcvObject.lcv_monthly}</td>
                                            <td>{lcvObject.lcv_commercial}</td>  
                                        </tr>
                                        <tr>
                                            <td><a href="#" className="text-primary text-decoration-none">Bus/Truck</a></td>
                                            <td>{bustruckObject.bus_truck_single}</td>
                                            <td>{bustruckObject.bus_truck_multi}</td>  
                                            <td>{bustruckObject.bus_truck_monthly}</td>
                                            <td>{bustruckObject.bus_truck_commercial}</td> 
                                        </tr>
                                        <tr>
                                        
                                            <td><a href="#" className="text-primary text-decoration-none">Upto 3 Axle Vehicle</a></td>
                                            <td>{axlevehi3Object.axle_vehi3_single}</td>
                                            <td>{axlevehi3Object.axle_vehi3_multi}</td>  
                                            <td>{axlevehi3Object.axle_vehi3_monthly}</td>
                                            <td>{axlevehi3Object.axle_vehi3_commercial}</td>
                                        </tr>
                                        <tr>
                                            <td><a href="#" className="text-primary text-decoration-none">4 to 6 Axie</a></td>
                                            <td>{Axlevehi4to6Object.axle_vehi4to6_single}</td>
                                            <td>{Axlevehi4to6Object.axle_vehi4to6_multi}</td>  
                                            <td>{Axlevehi4to6Object.axle_vehi4to6_monthly}</td>
                                            <td>{Axlevehi4to6Object.axle_vehi4to6_commercial}</td>
                                            
                                        </tr>
                                        <tr>
                                            <td><a href="#" className="text-primary text-decoration-none">HCM/EME</a></td>
                                            <td>{hcmEmeObject.hcm_eme_single}</td>
                                            <td>{hcmEmeObject.hcm_eme_multi}</td>  
                                            <td>{hcmEmeObject.hcm_eme_monthly}</td>
                                            <td>{hcmEmeObject.hcm_eme_commercial}</td>
                                        </tr>
                                        <tr>
                                            <td><a href="#" className="text-primary text-decoration-none">7 or more Axie</a></td>
                                            <td>{Axlevehi7tomoreObject.axle_vehi7_to_more_single}</td>
                                            <td>{Axlevehi7tomoreObject.axle_vehi7_to_more_multi}</td>  
                                            <td>{Axlevehi7tomoreObject.axle_vehi7_to_more_monthly}</td>
                                            <td>{Axlevehi7tomoreObject.axle_vehi7_to_more_commercial}</td>
                                            
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
                            <h5 className="section-title">Facilities Available Near {tollDetail.name} Toll Plaza</h5>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="d-flex align-items-center">
                                        <div className="img-container me-2 px-4 py-4">
                                            <img src="/rest-areas.png" className="img-fluid w-100 h-100" />  
                                        </div>
                                        <div>
                                            <h5 className="mb-0 title">Rest Areas</h5>
                                            <p className="mb-0 sub-title">{tollDetail.rest_areas}</p>
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
                                            <p className="mb-0 sub-title">{tollDetail.truck_lay_byes}</p>
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
                                            <p className="mb-0 sub-title">{tollDetail.static_weigh_bridge}</p>
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
                                 
                                <div className="col-md-12">
                                    <div className="map-box">
                                        <div id="google-maps-canvas">
                                       
                                            <iframe 
                                                className="iframe"
                                                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${tollDetail.lat},${tollDetail.long}`}>
                                            </iframe>
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
                                            <span className="right-part">{tollDetail.date_fee_notification}</span>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span className="left-part">Commercial Operation date:</span>
                                            <span className="right-part">{tollDetail.date_commercial_operation}</span>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span className="left-part">Fee Rule:</span>
                                            <span className="right-part">{tollDetail.fee_rule}</span>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span className="left-part">Capital Cost of Project (In.Rs CR.):</span>
                                            <span className="right-part">{tollDetail.capital_cost}</span>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span className="left-part">Concession Period:</span>
                                            <span className="right-part">{tollDetail.concessions_period}</span>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span className="left-part">Design Capacity (PCU):</span>
                                            <span className="right-part">{tollDetail.design_capacity}</span>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span className="left-part">Traffic (PCU/Day):</span>
                                            <span className="right-part">{tollDetail.target_traffic_per_day}</span>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span className="left-part">Name of concessionaire /OMT Contractor:</span>
                                            <span className="right-part">{tollDetail.contractor_name}</span>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span className="left-part">Name /Contact Detail of Incharge:</span>
                                            <span className="right-part">{tollDetail.contact_details}</span>
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
                                    <h5 className="section-title">{tollDetail.name} Toll Booth Important Information</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <ul className="list-unstyled bordered">
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span className="left-part">Helpline No:</span>
                                            <span className="right-part">{tollDetail.helpline_no}</span>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span className="left-part">Emergency Services:</span>
                                            <span className="right-part">{tollDetail.emergency_services}</span>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span className="left-part">Nearest Police Station:</span>
                                            <span className="right-part">{tollDetail.nearest_police_station}</span>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span className="left-part">Project Implementation Unit (PIU):</span>
                                            <span className="right-part">{tollDetail.project_implementation_unit}</span>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span className="left-part">Highway Administrator ( Project Director):</span>
                                            <span className="right-part">{tollDetail.highway_administrator}</span>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span className="left-part">Regional Office (RO):</span>
                                            <span className="right-part">{tollDetail.regional_office}</span>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span className="left-part">Representative of Consultant:</span>
                                            <span className="right-part">{tollDetail.representative_of_consultant}</span>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span className="left-part">Representative of Concessionaire:</span>
                                            <span className="right-part">{tollDetail.representative_of_concessionaire}</span>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span className="left-part">Nearest Hospital (s):</span>
                                            <span className="right-part">{tollDetail.nearest_hospital}</span>
                                        </li>
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
