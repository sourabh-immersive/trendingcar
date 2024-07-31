"use client";

import { useState } from "react";
import Link from "next/link";

interface ClientComponentProps {
  initialData: any;
  slug: string;
}

interface props {
  slug: string;
  title: string;
}

const ListCities: React.FC<ClientComponentProps> = ({ initialData, slug }) => {
  const [cityList, setStateList] = useState(initialData);
//   console.log(cityList);
  //   const { title, slug } = stateList;

  return (
    <div className="statesList">
      <h5>RTO in City</h5>
      <ul className="myList">
        {cityList ? (
          cityList.sort((a: props, b: props) => (a.slug > b.slug) ? 1 : -1).map((city: props, index: number) => (
            <li key={index}><Link href={`/rto/${slug}/${city.slug}`}>RTO {convertSlugToHeading(city.slug)}</Link></li>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </ul>
    </div>
  );
};

export default ListCities;
