"use client";
import React, { useState, useEffect } from 'react';
import WideAd from '@/components/advertisements/widead';
import PetrolCities, { NearByStationData } from "@/components/fuelstations/petrolcities";
import PetrolPump from "@/components/fuelstations/petrolpumpcity";
import SearchSection from "@/components/searchsection";
import ChangecityModal from '@/components/modal/ChangecityModal'; 

const API_BASE_URL = "https://trendingcar.com/admin/api/fuelStationCities";
 

interface PetrolPumpData {
  id: string;
  image: string;
  title: string;
  address: string;
  services: string[];
  airCheck: string;
  pucCheck: string;
  punctureCheck: string;
  tyreReplacement: string;
  openTime: string;
  closeTime: string; 
  location_lat: string;
  location_lng: string;
  contact: string;
  distance: string;
}
 
type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function Page({ params }: { params: { slug: string } }) {
  const [petrolPumpsData, setPetrolPumpsData] = useState<PetrolPumpData[]>([]);
  const [nearByStationData, setNearByStationData] = useState<NearByStationData[]>([]);
  const [page, setPage] = useState<number>(1);
  const [pageDescription, setPageDescription] = useState<String>(''); 
  const [pageTitle, setPageTitle] = useState<String>('');
  const [pageSize, setPageSize] = useState<number>(10); // Adjust page size as needed
  const [modalOpen, setModalOpen] = useState(false); 
  const handleSearch = (searchText: string) => {
    console.log('Searching for:', searchText);
    // Add your search logic here
  };

  const handleModalSearch = (city: string) => {
    console.log('Searching for petrol pumps in:', city);
    setModalOpen(false);
    // Add your modal search logic here
  };

  const fetchPetrolPumpsData = async (page: number, pageSize: number) => {
    try {
      const res = await fetch(`${API_BASE_URL}?slug=${params.slug}&page=${page}&pageSize=${pageSize}`, {
        method: 'GET',
        cache: 'no-store',
      });
      const data = await res.json();
      const newPetrolPumpsData = data.data[0].fuel_station;
      const newNearByFuelStation = data.data[0].nearByFuelStation.items; 
      const pageDescription = data.data[0].pageDescription;
      const subHeading = data.data[0].subHeading; 
      setPageDescription(pageDescription);
      setPageTitle(subHeading);
      setNearByStationData(newNearByFuelStation);
      setPetrolPumpsData(prevData => [...prevData, ...newPetrolPumpsData]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchPetrolPumpsData(page, pageSize);
  }, [params.slug, page, pageSize]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };
  const handleModalClose = () => setModalOpen(false);
  return (
    <div>
      <div className="row mt-4">
        <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
          <section>
            <div className="container">
              <div className="d-flex align-items-center">
                <h5 className="page-title me-2">{pageTitle}</h5>
                <a 
                  href="#" 
                  className="text-decoration-none text-primary fz-14" 
                  onClick={() => setModalOpen(true)}
                >
                  <i className="fa fa-pencil"></i> Change City
                </a>
                <ChangecityModal show={modalOpen} handleClose={handleModalClose} onSearch={function (city: string): void {
                  throw new Error('Function not implemented.');
                } } />
              </div>
              <p className="page-content">
                {pageDescription}
              </p>
            </div>
          </section>
        </div>
      </div>
      <WideAd img_url="/ads2.png" />
      <div className="row mt-4">
        <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className="container">
            <div className="row"> 
              {petrolPumpsData.map((pump) => (
                <PetrolPump
                  key={pump.id}
                  {...pump}
                />
              ))}
            </div>
            <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12 text-center">
              <button type="button" className="btn btn-outline-primary mt-4 mb-4" onClick={handleLoadMore}>
                Load More....
              </button>
            </div>
          </div>
        </div>
      </div>

      <WideAd img_url="/ads2.png" />
        
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
       
      <PetrolCities nearByStationData={nearByStationData} />
          
    </div>
  );
}
