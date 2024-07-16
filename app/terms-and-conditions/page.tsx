 import Content from '@/components/skeletons/content';

export default async function RTO() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/pages/9703`, { next: { revalidate: 3600 } });
  const data = await res.json();

  return (
    <section className="left-container">
        <div className="row single-content-area">
          <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
            {data ? (
              <div>
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