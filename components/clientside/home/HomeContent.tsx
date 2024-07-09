"use client";

import React, { useState } from 'react'
import WideAd from "@/components/advertisements/widead"
import BannerSlider from "@/components/clientside/home/BannerSlider";
import ExploreBrands from "@/components/clientside/home/ExploreBrands";
import PopularBrands from "@/components/clientside/home/PopularBrands";


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
                    

            

            <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                    <WideAd img_url="/ads2.png" />
                </div>
            </div>
        </>
    );
};

export default HomeContent;
