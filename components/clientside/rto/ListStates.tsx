"use client";

import { useState } from "react";
import Link from "next/link";

interface ClientComponentProps {
  initialData: any;
}

interface props {
  slug: string;
  title: string;
}

const ListStates: React.FC<ClientComponentProps> = ({ initialData }) => {
  const [stateList, setStateList] = useState(initialData);
  console.log(stateList);
  //   const { title, slug } = stateList;

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
        {stateList ? (
          stateList
            .sort((a: props, b: props) => (a.slug > b.slug ? 1 : -1))
            .map((state: props, index: number) => (
              <li key={index}>
                <Link href={`/rto/${state.slug}`}>
                  RTO {convertSlugToHeading(state.slug)}
                </Link>
              </li>
            ))
        ) : (
          <div>Loading...</div>
        )}
      </ul>
    </div>
  );
};

export default ListStates;
