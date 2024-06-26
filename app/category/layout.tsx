import LongAd from "@/components/advertisements/longad"
import SquareAd from "@/components/advertisements/squaread"
import PostsList from "@/components/bloghome/postslist"

export default function CategoryLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="rto-layout">
        <div className="container">
        <div className="row mt-4">
          <div className="col-md-9 col-sm-12 col-lg-9 col-xl-9 col-xxl-9">
            {children}
          </div>
          <div className="col-md-3 col-sm-12 col-lg-3 col-xl-3 col-xxl-3">
            <section className="right-container">
              <SquareAd />
              <div className="row mt-4">
                <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                <PostsList
                    title="Reviews"
                    linkText="View All"
                    link="/"
                    numberOfPosts={5}
                    category="car"
                  />
                </div>
              </div>
              <LongAd />
              <div className="row mt-4">
                <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                  CommercialVehicles...
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      </section>
    )
  }