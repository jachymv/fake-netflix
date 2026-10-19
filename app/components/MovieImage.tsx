import React from 'react'
import Image from "next/image"

interface MovieImageProps {
    src: string
    alt: string
}

export default function MovieImage({ src, alt } : MovieImageProps) {
  return (
    <div>
        <Image 
        src={src}
        alt={alt}
        width={192}
        height={288}
        className="w-48 h-72 rounded object-cover hover:scale-105"
        />
    </div>
  )
}
