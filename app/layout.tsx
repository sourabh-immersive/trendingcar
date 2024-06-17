import type { Metadata } from "next"
import { Lato } from "next/font/google"
import "../styles/global.scss"
import Header from "../components/header"
import Footer from "../components/footer"
import NextBreadcrumb from "@/components/BreadCrumbs"
import WideAd from "@/components/advertisements/widead"

// export const fetchCache = 'force-no-store';

const lato = Lato({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Trending Car",
  description: "Treding Car",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
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
