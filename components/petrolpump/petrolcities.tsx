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
        'Mhow',
        'Ujjain',
        'Sanawad',
        'Mhow',
        'Ujjain',
        'Sanawad'
    ];

    return (
        <section className="list-by-cities-section mt-4">
            <h5 className="section-title text-white">Fuel stations in nearby cities</h5>
            <small className="text-white">Top cities in Madhya Pradesh</small>
            <ul className="inline-block mt-2 cities-loader-container">
                {cities.map((city, index) => (
                    <li key={index} className="inline-block mb-2">
                        {city}
                    </li>
                ))}
            </ul>
            <button className="btn btn-primary">+4 more cities</button>
        </section>
    );
}
