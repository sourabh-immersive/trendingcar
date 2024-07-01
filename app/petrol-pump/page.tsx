import React from 'react'
import Page from '../blogs/[slug]/page'
import WideAd from '@/components/advertisements/widead'
import PetrolCities from "@/components/petrolpump/petrolcities";

export default function PetrolPump() {
    
    return (
        <div>
            <div className="row mt-4">
                <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                    <section>
                        <div className="container">
                            <h5 className="page-title">Select Petrol Pump</h5>
                            <p className="page-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
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
                        <h5 className="section-title">Search Fuel stations in nearby cities</h5>
                        <div className="search-wrapper pos-rel">
                            <input type="text" id="search" className="form-control" placeholder="Enter Your City" />
                            <img src="/search-black.png" className="img-fluid pos-abs search-img cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="container">
                        <section className="list-by-cities-section mt-4">
                            <h5 className="section-title text-white">Fuel stations in nearby cities</h5>
                            <small className="text-white">Top cities in Madhya Pradesh</small>
                            <PetrolCities  slug="Indore"/>
                        </section>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                    <WideAd img_url="/ads2.png" />
                </div>
            </div>
        </div>
    )
}