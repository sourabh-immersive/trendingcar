import HomeContent from "../../components/clientside/home/HomeContent"

export default function Home() {
    // API Call Server Side 
    const params = { slug: 'example-slug' };

    return (
        <>
            <HomeContent params={params} />
        </>
    )
}