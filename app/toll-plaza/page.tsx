import MainContent from "../../components/clientside/tollPlaza/MainContent"

export default async function TollPlaza() {

    const response = await fetch('https://trendingcar.com/admin/api/stateList');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
  // API Call Server Side 
    return (
       <>
       <MainContent states={data.data} />
       </>
    )
}

