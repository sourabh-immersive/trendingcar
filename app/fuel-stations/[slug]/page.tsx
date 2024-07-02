"use client";
import React, { useState, useEffect } from 'react';
import WideAd from '@/components/advertisements/widead';
import PetrolCities from "@/components/petrolpump/petrolcities";
import PetrolPump from "@/components/petrolpump/petrolpumpcity";
import SearchSection from "@/components/searchsection";
import CityModal from '@/components/CityModal';

const API_BASE_URL = "https://trendingcar.com/admin/api/fuelStationCities";

interface Location {
  lat: string;
  lng: string;
}

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
  location: Location;
  contact: string;
  distance: string;
}
interface NearByStationData {
  id: string,
  name:string,
  slug:string,
  url: string,
  title: string
}


type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function Page({ params }: { params: { slug: string } }) {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [petrolPumpsData, setPetrolPumpsData] = useState<PetrolPumpData[]>([]);
  const [nearByStationData, setNearByStationData] = useState<NearByStationData[]>([]);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10); // Adjust page size as needed

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
      const newNearByFuelStation = data.data[0].nearByFuelStation; 
      const pageDescription = data.data[0].pageDescription;
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
                TETS
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
              {/* Render petrol pumps data here */}
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
            <PetrolCities slug="Indore" />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <CityModal onSearch={handleModalSearch} onClose={() => setModalOpen(false)} isOpen={false} />
      )}
    </div>
  );
}
