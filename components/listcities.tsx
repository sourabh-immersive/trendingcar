"use client";

import { useEffect, useState } from "react";
import { ListCitiesByStateSlug } from "@/services/wordpress";
import { City } from "@/services/wordpress";
import Link from "next/link";

export default function ListCities({ slug }: { slug: string }) {
  const [cities, setCities] = useState<City[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const citiesData = await ListCitiesByStateSlug(slug);
      if (citiesData !== null) {
        setCities(citiesData);
      }
    };

    fetchData();
  }, [slug]);

  function convertSlugToHeading(slug: string): string {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
    <div className="citiesList">
      <ul className="myList">
        {cities ? (
          cities.sort((a, b) => (a.slug > b.slug) ? 1 : -1).map((city, index) => (
            <li key={index}><Link href={`/rto/${slug}/${city.slug}`}>RTO {convertSlugToHeading(city.slug)}</Link></li>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </ul>
    </div>
  );
}
