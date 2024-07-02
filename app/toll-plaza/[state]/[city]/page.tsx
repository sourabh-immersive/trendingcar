import CityContent from "../../../../components/clientside/tollPlaza/CityContent"

export default function TollPlaza() {
    // API Call Server Side 
    const params = { slug: 'example-slug' };

    return (
       <>
        <CityContent params={params} />
       </>
    )
}