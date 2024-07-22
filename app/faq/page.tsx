import Image from 'next/image';
import Content from '@/components/skeletons/content';
import FAQ from '@/components/FAQ';

export default async function About() {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/pages/9755`, { next: { revalidate: 3600 } });
    const data = await res.json();

    return (
        <section className="container">
            <div className="row single-content-area">
                <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                    {data ? (
                        <div>
                            {/* <h1>{data.title.rendered}</h1> */}
                            {data.featured_image_url && (
                                <Image
                                    src={data.featured_image_url}
                                    alt={data.title.rendered}
                                    width="1024"
                                    height="423"
                                />
                            )}
                            <FAQ faqs={data.faqsList} />
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: data.content.rendered,
                                }}
                            />

                        </div>
                    ) : (
                        <Content />
                    )}
                </div>
            </div>
        </section>
    )
}