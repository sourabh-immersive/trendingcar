"use client";

// import { Metadata, ResolvingMetadata } from 'next';
// import { fetchCityPostBySlug } from "../../services/wordpress";
import React, { useState } from 'react'
import WideAd from '@/components/advertisements/widead'
import PetrolCities from "@/components/petrolpump/petrolcities";
import PetrolPumpCity from "@/components/petrolpump/petrolpumpcity";
import SearchSection from "@/components/searchsection";
import CityModal from '@/components/CityModal';

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

// export async function generateMetadata(
//   { params, searchParams }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   // const slug = params.slug;
//   const { city } = params;
//   const blog = await fetchCityPostBySlug(city);

//   // Base URL for your site (use environment variable or hardcode)
//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://trendingcar.com';

//   if (!blog || !blog.yoast_head_json) {
//     return {
//       title: 'Blog Post',
//     };
//   }

//   const yoast = blog.yoast_head_json;
//   const previousImages = (await parent).openGraph?.images || [];
//   const ogImage = yoast.og_image?.[0]?.url || '/some-specific-page-image.jpg';

//   return {
//     metadataBase: new URL(baseUrl),
//     title: yoast.title,
//     robots: {
//       index: yoast.robots.index === 'index',
//       follow: yoast.robots.follow === 'follow',
//       'max-snippet': yoast.robots['max-snippet'],
//       'max-image-preview': yoast.robots['max-image-preview'],
//       'max-video-preview': yoast.robots['max-video-preview'],
//     },
//     openGraph: {
//       locale: yoast.og_locale,
//       type: yoast.og_type,
//       title: yoast.og_title,
//       description: yoast.og_description,
//       url: yoast.og_url,
//       siteName: yoast.og_site_name,
//       images: [
//         {
//           url: ogImage,
//           width: yoast.og_image?.[0]?.width,
//           height: yoast.og_image?.[0]?.height,
//           type: yoast.og_image?.[0]?.type,
//         },
//         ...previousImages,
//       ],
//     },
//     twitter: {
//       card: yoast.twitter_card,
//       title: yoast.og_title,
//       description: yoast.og_description,
//       images: ogImage,
//     },
//   };
// }

export default function Page({ params }: { params: { slug: string } }) {
  console.log(params);
  const { slug } = params;
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const handleSearch = (searchText: string) => {
    console.log('Searching for:', searchText);
    // Add your search logic here
  };
  const handleModalSearch = (city: string) => {
    console.log('Searching for petrol pumps in:', city);
    setModalOpen(false);
    // Add your modal search logic here
  };
  const petrolPumpsData = [
    {
      imageSrc: "/BPCL.png",
      name: "Bpcl-singh-Roadlines",
      address: "Shivnagar Village, Khandwa Road, Shivnagar, Indore, 450221, Shivnagar, 450009, Indore, Madhya Pradesh",
      timings: "06:00AM - 10:30PM",
      contact: "1800224344",
      fuelTypes: [
        { type: "Petrol", icon: "/petrol.png" },
        { type: "Diesel", icon: "/diesel.png" },
      ],
    },
    {
      imageSrc: "/BPCL.png",
      name: "Hpcl-Rajdeep-Fuels",
      address: "M.G. Road, Palasia, Indore, 452001, Madhya Pradesh",
      timings: "05:30AM - 11:00PM",
      contact: "1800223355",
      fuelTypes: [
        { type: "Petrol", icon: "/petrol.png" },
        { type: "Diesel", icon: "/diesel.png" },
      ],
    },
    {
      imageSrc: "/BPCL.png",
      name: "Iocl-Maheshwari-Fuels",
      address: "AB Road, Vijay Nagar, Indore, 452010, Madhya Pradesh",
      timings: "06:00AM - 09:30PM",
      contact: "1800225566",
      fuelTypes: [
        { type: "Petrol", icon: "/petrol.png" },
        { type: "Diesel", icon: "/diesel.png" },
      ],
    },
  ];
  return (
    <div>
        <div className="row mt-4">
          <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
            <section>
              <div className="container">
                <div className="d-flex align-items-center">
                  <h5 className="page-title me-2">76 Petrol Pumps in Indore</h5>
                  <a 
                    href="#" 
                    className="text-decoration-none text-primary fz-14" 
                    onClick={() => setModalOpen(true)}
                  >
                    <i className="fa fa-pencil"></i> Change City
                  </a>
                </div>
                <p className="page-content">
                  Explore 76 fuel stations and pumps in Indore. Check the address, location, phone number, and timing of nearby petrol and CNG pumps to fill the vehicle tank easily, as per your convenience. Most fuel pumps are open 24*7 to provide the services. Indian Oil, Bharat Petroleum, Hindustan Petroleum (HP), and Reliance are the popular fuel companies that have their petrol and CNG pumps in many areas of Indore.
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
              <div className="row">
                {petrolPumpsData.map((pump, index) => (
                  <PetrolPumpCity key={index} {...pump} />
                ))}
              </div>
              <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12 text-center">
                <button type="button" className="btn btn-outline-primary mt-4 mb-4">Load More....</button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                <WideAd img_url="/ads2.png" />
            </div>
        </div>

        <div className="row mt-4">
            <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
              <SearchSection
                title="Search Fuel stations in nearby cities"
                placeholder="Enter Your City"
                searchIconSrc="/search-black.png"
                onSearch={handleSearch}
              />
            </div>
        </div>
        <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="container">
                    <PetrolCities  slug="Indore"/>
                </div>
            </div>
        </div>
        
    </div>
  )
}
