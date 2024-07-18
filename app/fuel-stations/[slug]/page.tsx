"use client";
import React, { useState, useEffect, ChangeEvent } from 'react'; 
import PetrolCities, { NearByStationData } from "@/components/fuelstations/petrolcities";
import PetrolPump from "@/components/fuelstations/petrolpumpcity";
import ChangecityModal from '@/components/modal/ChangecityModal';  
import Autocomplete from '@/components/autocomplete/autocomplete';
const API_BASE_URL = `${process.env.NEXT_PUBLIC_API_LARAVEL_BASE_URL}/fuelStationCities`;
import { FaPencil } from "react-icons/fa6";
 

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
  const [pageSize, setPageSize] = useState<number>(9);
  const [modalOpen, setModalOpen] = useState(false);

  const fetchPetrolPumpsData = async (page: number, pageSize: number) => {
    try {
      const res = await fetch(`${API_BASE_URL}?slug=${params.slug}&page=${page}&pageSize=${pageSize}`, {
        method: 'GET',
        next: { revalidate: 3600 }});
      
      const data = await res.json();
      const newPetrolPumpsData = data?.data?.[0]?.fuel_station;
      const newNearByFuelStation = data?.data?.[0]?.nearByFuelStation?.items; 
      const pageDescription = data?.data?.[0]?.pageDescription;
      const subHeading = data?.data?.[0]?.subHeading; 
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
      <div className="row">
        <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
          <section>
            <div className="container">
              <div className="d-flex align-items-center">
                <h5 className="page-title me-2">{pageTitle}</h5>
                <a 
                  href="#" 
                  className="text-decoration-none fz-14" 
                  onClick={() => setModalOpen(true)}
                >
                  <FaPencil /> Change City
                </a>
                <ChangecityModal show={modalOpen} handleClose={handleModalClose} onSearch={function (city: string): void {
                  throw new Error('Function not implemented.');
                } } />
                <div className="ms-auto">

                </div>
              </div>
              <p className="page-content">
                {pageDescription}
              </p>
            </div>
          </section>
        </div>
      </div> 
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
              <button type="button" className="btn btn-theme text-white mt-4 mb-4" onClick={handleLoadMore}>
                Load More....
              </button>
            </div>
          </div>
        </div>
      </div>  
      <div className="row mt-4 mb-4">
        <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className="container">
            <div className="search-wraps">
              <Autocomplete  api={'fuelStationCities'} type={'city'} redirect={'fuel-stations'}/>
            </div>
          </div>
        </div>
      </div>
      <PetrolCities nearByStationData={nearByStationData} /> 
    </div>
  );
}