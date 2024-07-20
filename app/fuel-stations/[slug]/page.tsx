import FuelStations from "../../../components/clientside/fuelStations/FuelStations"
type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function TollPlaza({ params, searchParams }: Props,) {
console.log('port-blair===',params.slug);
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_LARAVEL_BASE_URL}/fuelStationCities?slug=${params.slug}&page=1&pageSize=18`, { next: { revalidate: 3600 } });
    console.log(response.ok);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const initialFuel = await response.json();
  // API Call Server Side 
    return (
       <>
       <FuelStations 
          fuelstation={initialFuel?.data[0]?.fuel_station}
          nearbyfuelstation= {initialFuel?.data[0]?.nearByFuelStation?.items}
          top_city= {initialFuel?.data[0]?.top_city}
          pagedescription = {initialFuel?.data[0]?.pageDescription}
          pagetitle = {initialFuel?.data[0]?.subHeading}
          slug={params.slug}
          />
       </>
    )
}

