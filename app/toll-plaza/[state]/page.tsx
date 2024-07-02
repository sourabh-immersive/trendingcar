import StateContent from "../../../components/clientside/tollPlaza/StateContent"

export default function TollPlaza() {
    // API Call Server Side 
    const params = { slug: 'example-slug' };

    return (
       <>
        <StateContent params={params} />
       </>
    )
}