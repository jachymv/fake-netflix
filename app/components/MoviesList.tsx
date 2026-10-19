"use client"

import React from 'react'
import { moviesData } from "@/app/data"
import Link from "next/link"
import MovieImage from "@/app/components/MovieImage"
import Input from "@/app/components/Input"
import { useState } from "react"

export default function MoviesList() {
    const [vstup, setVstup] = useState("")
    const [sortBy, setSortBy] = useState("default")




    const filteredMovies = moviesData.filter((m) => {
        return m.title.toLowerCase().includes(vstup.toLowerCase())
    })

    const sortedMovies = [...filteredMovies].sort((a, b) => {
        if (sortBy === "title-asc") {
            return a.title.localeCompare(b.title)
        }
        if (sortBy === "title-desc") {
            return b.title.localeCompare(a.title)
        }
        if (sortBy === "rating-desc") {
            return b.rating - a.rating
        }
        if (sortBy === "rating-asc") {
            return a.rating - b.rating
        }
        if (sortBy === "runtime-longest") {
            return b.runtimeMin - a.runtimeMin
        }
        if (sortBy === "runtime-shortest") {
            return a.runtimeMin - b.runtimeMin
        }
        return 0
    })

    const count = filteredMovies.length    

  return (
    <div>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="default">vychozi</option>
            <option value="title-asc">A - Z</option>
            <option value="title-desc">Z - A</option>
            <option value="rating-desc">nejlepsi</option>
            <option value="rating-asc">nejhorsi</option>
            <option value="runtime-longest">nejdelsi</option>
            <option value="runtime-shortest">nejkratsi</option>
        </select>
        <Input vstup={vstup} setVstup={setVstup} />
        <p>pocet nalezenych filmu: {count}</p>
        {sortedMovies.map(({ id, image, title, year, director, genre, runtimeMin, rating, watched }) => {
            return (
                <div key={id}>
                    <Link href={`/movies/${id}`}>
                        <MovieImage src={image} alt={title} />
                        <h2>{title}</h2>
                    </Link>
                    <p>{year}</p>
                    <p>{director}</p>
                    <p>{genre}</p>
                    <p>{runtimeMin}</p>
                    <p>{rating}</p>
                    <p>{watched}</p>
                </div>
            )
        })}

    </div>
  )
}
