import { directorsData } from '@/app/data';
import Link from "next/link"
import React from 'react'

export default async function DirectorDetailPage({ 
    params } : {
        params: Promise<{ id: string }>;
    }) {
    const { id } = await params
    const director = directorsData.find((d) => d.id === Number(id))
    if (!director) {
        return <p>reziser nebyl nalezen</p>
    }
  return (

    <div>
        <Link href={`/directors`}>zpet</Link>

        <div key={id}>
            <h2>{director.name}</h2>
            <p>{director.birthYear}</p>
            <p>{director.country}</p>
            <p>{director.oscars}</p>
            <p>{director.bio}</p>
        </div>
    </div>
  )
}
