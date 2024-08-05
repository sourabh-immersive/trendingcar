import Link from "next/link";

export default async function Page() {
  const siteUrl = "https://www.trendingcar.com";
  const postsBaseUrl = "https://wp.trendingcar.com/wp-json/wp/v2/posts";
  const statesBaseUrl = "https://wp.trendingcar.com/wp-json/wp/v2/states";
  const citiesBaseUrl = "https://wp.trendingcar.com/wp-json/wp/v2/cities";
  const perPage = 100;

  async function fetchPosts(baseUrl: string): Promise<any[]> {
    let page = 1;
    let allPosts: any[] = [];
    let totalPages = 1;

    while (page <= totalPages) {
      const response = await fetch(`${baseUrl}?per_page=${perPage}&page=${page}&_fields=title,slug,stateSlug`);
      const posts = await response.json();

      if (posts.length > 0) {
        allPosts = [...allPosts, ...posts];
      }

      totalPages = parseInt(response.headers.get("X-WP-TotalPages") || "1", 10);
      page++;
    }

    return allPosts;
  }

  const [blogPosts, statesPosts, citiesPosts] = await Promise.all([
    fetchPosts(postsBaseUrl),
    fetchPosts(statesBaseUrl),
    fetchPosts(citiesBaseUrl),
  ]);

//   const allPosts = [...blogPosts, ...statesPosts, ...citiesPosts];


    return (
        <main>
            <section className="sitemap-layout">
                <div className="container">
                    <div className="row single-content-area">
                        <h1 style={{textAlign: 'center'}}>HTML Sitemap</h1>
                        
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Car News</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">RTO's in States</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">RTO's in Cities</button>
  </li>
</ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
  <ul>
                        {
                            blogPosts.map((post: any, key: number) => (
                                <li key={key}><Link href={`${siteUrl}/car-news-india/${post.slug}`}>{post.title.rendered}</Link></li>
                            ))
                        }
                        </ul>
  </div>
  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
  <ul>
                        {
                            statesPosts.map((spost: any, key: number) => (
                                <li key={key}><Link href={`${siteUrl}/rto/${spost.slug}`}>{spost.title.rendered}</Link></li>
                            ))
                        }
                        </ul>
  </div>
  <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
  <ul>
                        {
                            citiesPosts.map((cpost: any, key: number) => (
                                <li key={key}><Link href={`${siteUrl}/rto/${cpost.stateSlug}/${cpost.slug}`}>{cpost.title.rendered}</Link></li>
                            ))
                        }
                        </ul>
  </div>
</div>
                    </div>
                </div>
            </section>
        </main>
    )
}