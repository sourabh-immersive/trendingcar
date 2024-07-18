"use client";

import React, { useState ,useEffect } from 'react'
import TollplazaList from '@/components/tollplaza/TollplazaList';
interface State {
    name: string;
    imageUrl: string;
    slug: string;
    image:string;
}

interface Props {
    states: State[];
}


type States = {
    name: string;
    imageUrl: string;
    slug: string;
    image:string;
}    
export default function MainContent(states:Props) {
    const [statesData, setStatesData] = useState<States[]>(states.states);
    const [visibleStates, setVisibleStates] = useState<number>(12);
    const [showMore, setShowMore] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const toggleStates = () => {
        setVisibleStates(showMore ? 12 :filteredStates.length);
        setShowMore(!showMore);
    };

    const filteredStates = statesData.filter(state =>
        state.name.toLowerCase().includes(searchTerm.toLowerCase())
    ); 
    return (
        <div>
            <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                    <section>
                        <div className="container">
                            <h5 className="page-title">Toll Plaza</h5>
                            <p className="page-content">Toll Plaza Booth is a booth or a counter on a toll road wherein the driver will have to stop at the toll plaza to pay the taxes to drive any further. These roads are known as toll roads and come under the control of the National Highway Authority of India (NHAI). The toll roads are usually on the state and national highways wherein the toll plazas will be located. The toll tax amount paid by the commuters at the toll plaza booth will be levied on all four-wheelers or larger vehicles.</p>
                        </div>
                    </section>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="container">
                        <div className="card">
                            <div className="card-body">
                                <section className="state-list-wrapper">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <h5>Toll Plaza List by States in India</h5>
                                            <small>Top states in India</small>
                                        </div>
                                        <div className="ms-auto w-25">
                                            <div className="form-group position-relative">
                                                <input
                                                type="text"
                                                id="search"
                                                className="form-control"
                                                placeholder="Search State"
                                                value={searchTerm}
                                                onChange={e => setSearchTerm(e.target.value)}
                                                />
                                                <img src="/search-black.png" className="img-fluid position-absolute r-3 t-10" alt="search icon" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        {filteredStates.slice(0, visibleStates).map((state, index) => (
                                            <TollplazaList key={index} stateName={state.name} slug={state.slug} imageUrl={state.image} />
                                        ))}
                                    </div>
                                    {filteredStates.length > 12 && (
                                        <div className="row mt-4">
                                            <div className="col-12 text-center">
                                                <button className="btn btn-outline-theme text-decoration-none ml-2" onClick={toggleStates}>
                                                    {showMore ? 'Show Less States' : 'Load More States'}
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="container">
                        <section className="about-toll-plaza mt-4">
                            <h5 className="section-title">What is Toll Plaza?</h5>
                            <p className="page-content">A Toll Plaza or a toll gate is a location on a road or a state or national highway wherein the drivers of the vehicles which pass by the way will have to pay the fee or toll charges or toll fees to pass through the toll gates. These toll plazas are usually operated by government agencies or private companies which operate the roads or highways. The toll or fee which is collected at the plaza will be used to maintain, expand, and repair the road network.</p>
                            <p className="page-content">National Highway Authority of India (NHAI), under the central government, manages the toll collection across all the toll plazas spread across the country.</p>
                        </section>
                    </div>
                </div>
            </div> 
 
            <div className="row mt-4">
                <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="container">
                        <section className="rules-section mt-4">
                            <h5 className="section-title">Toll Plaza Rules and Regulations in India</h5>
                            <p className="page-content">
                                Roads are built and maintained to help commuters to reach from one place to their desired destination quickly, safely and conveniently. Though there are many roads spread across the length and breadth of the country few commuters may choose to drive via highway to reach their destination,as it is convenient in terms of feasibility of driving, connectivity, time used to reach the destination and so on. To pass through the highways, the commuters will have to pay taxes, this is called toll tax.
                            </p>
                            <p className="page-content">
                                Usually, the toll tax charged in India differs from one highway to another and will be arrived at solely based on what each traveller travelling on the road is held accountable for Provisions related to maximum waiting time, and the number of vehicles in a queue during the peak hours at the toll plazas are included in the toll plaza rules.
                            </p>
                            <p className="page-content">
                                As per the policies of the National Highway Fee (Determination of Rates and Collection) Rules of 2008, the toll taxes in India will be revised every year from April 1.
                            </p>
                        </section>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="container">
                        <section className="rules-section-india mt-4">
                            <h5 className="section-title">Toll Plaza Rules followed in India are as follows:</h5>
                            <p className="page-content">
                                <b>Toll Booths</b> - There should be enough toll lanes or booths for providing service time for vehicles which is not more than ten seconds per vehicle, especially during peak traffic time.
                            </p>
                            <p className="page-content">
                                <b>vehicle</b> - Only 6 or less than 6 vehicles should be per toll booth lane in a queue during peak traffic hours.
                            </p>
                            <p className="page-content">
                                <b>Expansion in Toll Lanes</b> - The total number of toll lanes or booths should be expanded if the maximum waiting time for the vehicles or users exceeds three minutes. The above-mentioned toll rules will allow for the building of new roads and maintenance of highway roads or toll roads without increasing the taxes on the public. It is a general practice that once the entire cost incurred to build these roads is recovered by the government through toll tax, the requirement to pay rolls or toll taxes on highways will be removed.
                            </p>
                        </section>
                    </div>
                </div>
            </div> 

 
            <div className="row mt-4">
                <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="container">
                        <section className="what-toll-tax-section mt-4">
                            <h5 className="section-title">What is a Toll Tax?</h5>
                            <p className="page-content">
                                A Toll Tax, also known as a toll, is a type of tax levied for road infrastructure purposes. The toll fees will be charged on certain roads like interstate expressways, tunnels, highways, bridges, turnpikes and so on. The toll taxes are referred to as the National Highway fee or NH Fee. It will be charged on the roads on which the toll tax is levied called toll bridges, toll roads, toll tunnels or tollways. The toll tax will be collected from the road drivers when they commute through the specific roads for road infrastructure purposes.
                            </p>
                            <p className="page-content">
                                Usually, two toll booths are located at a distance of 60 kilometres, wherein one stretch of the toll road ends and the other one begins. The toll road stretch is a common road of sixty kilometres or less and the toll tax will be calculated on the distance. If the stretch of the road is less than 60 kilometres, then the toll tax amount will depend on the exact distance.
                            </p>
                        </section>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="container">
                        <section className="what-toll-tax-section mt-4 mb-4">
                            <h5 className="section-title">Features of Toll Tax</h5>
                            <ul>
                                <li>Toll Tax is levied by the government. The tax will be levied on the passing drivers who pass by these roads as maintenance fees. Some of the salient features of toll tax in India are as follows: </li>
                                <li>The Toll Tax levied by the National Highway Authority of India is an indirect tax and hence it is levied on services.</li>
                                <li>The revenue generated from the toll tax will be used for road construction and maintenance purposes. Hence, it mainly covers the cost of newly built roads by charging the toll tax. It also charges for maintaining the toll tax. </li>
                                <li>The collection of the toll tax will happen at a toll plaza or toll booth which provides a receipt of the payment for the commuter. </li>
                                <li>The toll tax is not the usual road tax, as it is different from the one which the RTO charges on the vehicle owners. It is a charge, levied by the NHAI for the roads which are located on national or state highways. </li>
                                <li>The NHAI will levy toll tax fees only on the four-wheeler or any other larger vehicles which ply the toll roads. </li>
                                <li>The tax generated from the toll plazas will be distributed to several contractors or private parties by the NHAI. Hence, these contractors or private parties will be held responsible for maintaining one stretch of the roads usually known as the ‘one project of toll road’.</li>
                                <li>The private parties who maintain the toll plazas are responsible for providing water facilities, toilets, and emergency services to the passengers at the toll plazas.</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>

              

            <div className="row mt-4">
                <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="container">
                        <section className="toll-plaza-regulations-section mt-4">
                            <h5 className="section-title">Toll Plaza regulations in India</h5>
                            <p className="page-content">
                                India{"'"}s road infrastructure has undergone a significant transformation in recent years, with toll plazas playing an instrumental role in funding these improvements. Toll plazas are essential for generating income to maintain and develop the expansive network of highways and expressways across the nation. However, managing these toll plazas necessitates strict regulations to ensure seamless operations and transparency. 
                            </p>
                            <p className="page-content">
                                As we step into 2023, there have been several changes and updates in the rules governing toll plaza operations. These alterations are aimed at enhancing efficiency, ensuring accountability, promoting digitization, and improving user experience.One of the major shifts has been towards electronic toll collection (ETC) systems. The government introduced FASTag - a device that employs Radio Frequency Identification (RFID) technology for making direct toll payments while the vehicle is in motion.
                            </p>
                            <p className="page-content">
                                This system not only reduces waiting time but also ensures contactless transactions which became particularly important during the COVID-19 pandemic.Moreover, steps have been taken to streamline revenue collection processes through centralized monitoring systems. 
                            </p>
                            <p className="page-content">
                                This includes setting up control rooms at national and state levels for real-time tracking of revenue from each toll plaza as well as monitoring any anomalies or discrepancies that might occur.In terms of transparency measures, stricter auditing protocols have been put in place. Regular audits are conducted by independent agencies to assess financial management at these facilities. In addition to this, efforts are being made to make information regarding toll rates more accessible to commuters through digital platforms like mobile applications or websites. 
                            </p>
                            <p className    ="page-content">
                                Furthermore, customer service has become a focal point of reforms with grievance redressal mechanisms being strengthened at all levels - be it online or offline mode. For instance, dedicated helpline numbers have been launched where commuters can register their complaints related to overcharging or poor service quality among other issues.To sum up, India{"'"}s approach towards administering its vast network of toll plazas is becoming increasingly comprehensive as we move forward into 2023 – focusing on technological advancements for operational efficiency; stringent regulatory checks for financial integrity; enhanced communication channels for improved customer satisfaction; and robust auditing procedures for maintaining transparency.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
 
        </div>
    )
}