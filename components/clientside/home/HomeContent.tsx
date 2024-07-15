"use client";

import React, { useState } from 'react'
import WideAd from "@/components/advertisements/widead"
import BannerSlider from "@/components/clientside/home/BannerSlider";
import ExploreBrands from "@/components/clientside/home/ExploreBrands";
import PopularBrands from "@/components/clientside/home/PopularBrands";
import CarTypes from "@/components/clientside/home/CarTypes";
import TopCars from "@/components/clientside/home/TopCars";
import CompareCars from "@/components/clientside/home/CompareCars";


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
            <BannerSlider />
            <ExploreBrands />
            <PopularBrands />

            <CarTypes />
            <TopCars />
                    
            <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                    <WideAd img_url="/ads2.png" />
                </div>
            </div>

            <CompareCars />
        </>
    );
};

export default HomeContent;
