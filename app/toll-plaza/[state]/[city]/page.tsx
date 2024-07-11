import CityContent from "../../../../components/clientside/tollPlaza/CityContent"
type Props = {
    params: { city: string }; 
};
export default async function TollPlazaState( { params }: Props) {
    console.log('params',params);
    const response = await fetch('https://trendingcar.com/admin/api/tollList', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            city_slug: params.city
        })
      });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();

    return (
        <>
            <CityContent tolldata={data.data[0]} />
        </>
    )
}