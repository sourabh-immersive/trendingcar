import WebStoryClient from "@/components/clientside/WebStoryClient";
import PostContent from "@/components/PostContent";

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}


export default async function Page({ params }: { params: { slug: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_CUSTOM_URL}/webstory/${params.slug}`);
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
