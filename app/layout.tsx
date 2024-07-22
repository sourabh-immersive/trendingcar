import type { Metadata } from "next"
import { Lato, Roboto } from "next/font/google"
import "../styles/global.scss"
import Header from "../components/header"
import Footer from "../components/footer"
import NextBreadcrumb from "@/components/BreadCrumbs"
import WideAd from "@/components/advertisements/widead"

// export const fetchCache = 'force-no-store';
export const revalidate = 10

const lato = Lato({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Trending Car: New Cars, Buy & Sell Cars in India, Car Prices",
  description: "Discover automotive trends with Trending Car. Buy & sell cars in India, find new cars, best prices, expert reviews, and industry news. Stay updated!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <NextBreadcrumb
          homeElement={'Home'}
          separator={<span> / </span>}
          activeClasses='active text-primary'
          containerClasses='breadcrumb' 
          listClasses='breadcrumb-item'
          capitalizeLinks
        />
        <WideAd img_url="/image-9.png" />
        <div className="main-layout">
        {children}
        </div>
        <Footer />
        </body>
    </html>
  );
}
