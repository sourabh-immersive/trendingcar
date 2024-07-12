"use client";
import Link from "next/link";
export interface NearByStationData {
    id: number;
    name: string;
    slug: string;
}
interface PetrolCitiesProps {
    nearByStationData?: NearByStationData[];
}
const PetrolCities: React.FC<PetrolCitiesProps> = ({ nearByStationData = [] }) => {
    return (
        <>
            {nearByStationData.length > 0 && (
                <div className="row mt-4">
                    <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="container">
                            <section className="list-by-cities-section">
                                <h5 className="section-title text-white">Fuel stations in nearby cities</h5>
                                <ul className="inline-block mt-2 cities-loader-container">
                                    {nearByStationData.map((station) => (
                                        <li key={station.id} className="inline-block mb-2"> 
                                            <Link href={`/fuel-stations/${station.slug}`}>
                                                {station.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default PetrolCities;
