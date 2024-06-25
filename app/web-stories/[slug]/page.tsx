import WebStoryClient from "@/components/clientside/WebStoryClient";
import PostContent from "@/components/PostContent";

const API_BASE_URL = "https://wp.trendingcar.com/wp-json/custom/v2";

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}


export default async function Page({ params }: { params: { slug: string } }) {
  const res = await fetch(`${API_BASE_URL}/webstory/${params.slug}`);
  const data = await res.json();
  // console.log(params);
  // console.log(data);

  return (
    <>
    <div className="webStory">
        <WebStoryClient initialData={data} />
    </div>
    </>
  
  )
}
