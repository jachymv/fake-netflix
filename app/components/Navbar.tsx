import React from 'react'
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-black/80 px-8 py-4 backdrop-blur">
        <Link href="/" className="text-2xl font-bold uppercase tracking-wider text-netflix-red">
            Fake Netflix
        </Link>
        <ul className="flex items-center gap-6">
            <li>
                <Link href={`/movies`} className="text-sm font-medium text-gray-300 transition-colors hover:text-white">
                    Filmy
                </Link>
            </li>
            <li>
                <Link href={`/directors`} className="text-sm font-medium text-gray-300 transition-colors hover:text-white">
                    Reziseri
                </Link>
            </li>
        </ul>
    </nav>
  )
}
