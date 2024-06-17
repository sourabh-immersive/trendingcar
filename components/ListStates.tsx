"use client";

import { useEffect, useState } from "react";
import { ListStatesData } from "@/services/wordpress";
import { City } from "@/services/wordpress";
import Link from "next/link";

export default function ListStates() {
  const [states, setStates] = useState<City[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const statesData = await ListStatesData();
      if (statesData !== null) {
        setStates(statesData);
      }
    };

    fetchData();
  }, []);

  function convertSlugToHeading(slug: string): string {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
    <div className="statesList">
      <h5>RTO in States</h5>
      <ul className="myList">
        {states ? (
          states.sort((a, b) => (a.slug > b.slug) ? 1 : -1).map((state, index) => (
            <li key={index}><Link href={`/rto/${state.slug}`}>RTO {convertSlugToHeading(state.slug)}</Link></li>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </ul>
    </div>
  );
}