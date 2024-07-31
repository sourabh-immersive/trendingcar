'use client'

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface CityProps {
  slug: string;
  title: string;
  state: string;
}

export default function AllCitiesList() {
  const { state } = useParams<{ state: string; city: string }>();
  const [data, setData] = useState<CityProps[] | null>(null);
  const [loading, setLoading] = useState(true);
  console.log(state)
  const myState = state ? state : ''
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_CUSTOM_URL}/list-cities?states=${myState}`);
        const data = await res.json();
        setData(data);
        // console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }
    // if (myState) {
      fetchData();
    // }
  }, [myState]);

  function convertSlugToHeading(slug: string): string {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  // console.log(data)

  return (
    <div className="statesList">
      <h5>RTO in City</h5>
      <ul className="myList" data-state={state}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          data?.sort((a, b) => (a.slug > b.slug ? 1 : -1)).map((city, index) => (
            <li key={index}>
              <Link href={`/rto/${city.state}/${city.slug}`}>RTO {convertSlugToHeading(city.slug)}</Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}