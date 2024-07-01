"use client";

import { useEffect, useState } from "react";


export default function PetrolCities({ slug }: { slug: string }) {
    const cities: string[] = [
        'Indore',
        'Dewas',
        'Mhow',
        'Ujjain',
        'Sanawad',
        'Badnagar',
        'Mhow'
    ];
    return (
        <>
            <ul className="inline-block mt-2 cities-loader-container">
                {cities.map((city, index) => (
                    <li key={index} className="inline-block mb-2">
                        {city}
                    </li>
                ))}
            </ul>
            <button className="btn btn-primary p-2">+4 more cities</button>
        </>
    );
}
