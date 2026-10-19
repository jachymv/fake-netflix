import React from 'react'
import { moviesData } from "@/app/data"
import Link from "next/link"
import MovieImage from "@/app/components/MovieImage"

export default async function MovieDetailPage({ 
    params } : {
        params: Promise<{ id: string }>;
    }) {
    const { id } = await params
    const movie = moviesData.find((m) => m.id === Number(id))
    if (!movie) {
        return <p>Film nebyl nalezen</p>
    }
  return (
    <div>
        <Link href={`/movies`}>zpet</Link>
        
        <MovieImage src={movie.image} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>Rok vydani: {movie.year}</p>
        <p>Reziser: {movie.director}</p>
        <p>Zanr: {movie.genre}</p>
        <p>Delka: {movie.runtimeMin}</p>
        <p>Hodnoceni: {movie.rating}</p>
        <p>Zhlednuto{movie.watched}</p>
    </div>
  )
}
