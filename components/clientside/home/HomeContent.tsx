"use client";

import React, { useState } from 'react'
import WideAd from "@/components/advertisements/widead"
import BannerSliderClient from "@/components/clientside/BannerSliderClient";


type City = {
    name: string;
    nh: string;
    section: string;
};

const HomeContent = ({ params }: { params: { slug: string } }) => {
    console.log(params);
    const { slug } = params;
    return (
        <>
            <div className="row mt-4">
                <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                    <section className="banner-section">
                        <BannerSliderClient />
                        <div className="wraps">
                            <div className="row">
                                <div className="col-md-6 offset-md-3">
                                    <div className="container">
                                        <h6>TRUSTED CAR DEALER SERVICES</h6>
                                        <h1>FIND THE RIGHT CAR</h1>
                                        <div className="form-group pos-rel">
                                            <input type="text" className="form-control home-search-input" id="search" placeholder="Type to select car name" />
                                            <button type="button" className="btn btn-primary pos-abs home-search-btn">Search Car</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                    <WideAd img_url="/ads2.png" />
                </div>
            </div>
        </>
    );
};

export default HomeContent;
