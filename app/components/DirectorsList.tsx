"use client"

import React from 'react'
import { directorsData } from "@/app/data"
import Link from "next/link"
import { useState } from "react"
import Input from "@/app/components/Input"

export default function DirectorsList() {
    const [vstup, setVstup] = useState("")
    const filteredDirectors = directorsData.filter((d) => d.name.toLowerCase().includes(vstup.toLowerCase()))
    const count = filteredDirectors.length
  return (
    
    <div>
        <Input vstup={vstup} setVstup={setVstup} />
        <p>pocet nalezenych reziseru: {count}</p>
        {filteredDirectors.map(({ id, name }) => {
            return (
                <div key={id}>
                    <Link href={`/directors/${id}`}>
                        <h2>{name}</h2>
                    </Link>
                </div>
            )
        })}

    </div>
  )
}
