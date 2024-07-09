"use client";
import Link from "next/link";
export interface NearByStationData {
    id: number;
    name: string;
    slug: string;
}

interface PetrolCitiesProps {
    nearByStationData: NearByStationData[];
}

export default function PetrolCities({ nearByStationData}: PetrolCitiesProps) {
    return (
        <>
            <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="container">
                        <ul className="inline-block mt-2 cities-loader-container">
                            {nearByStationData.map((station, index) => (
                                <li key={index} className="inline-block mb-2"> 
                                    <Link href={`/fuel-stations/${station.slug}`}>   {station.name} </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>    
        </>
    );
}