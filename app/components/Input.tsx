import React from 'react'

export default function Input({ 
    vstup, 
    setVstup 
}: {
    vstup: string
    setVstup: (value:string) => void
}) {
        
  return (
    <div>
        <input value={vstup} onChange={(e) => setVstup(e.target.value)} placeholder="hledat" />
    </div>
  )
}
