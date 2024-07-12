import StateContent from "../../../components/clientside/tollPlaza/StateContent"
type Props = {
    params: { state: string }; 
};
export default async function TollPlazaState( { params }: Props) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_LARAVEL_BASE_URL}/tollList`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            state_slug: params.state
        })
      });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return (
       <>
        <StateContent tolls={data.data} slug={params.state} />
       </>
    )
}