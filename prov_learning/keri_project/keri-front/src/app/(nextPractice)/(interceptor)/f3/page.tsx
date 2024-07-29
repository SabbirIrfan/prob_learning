import Link from 'next/link'
import React from 'react'

export default function F3() {
  return (
    <div>
      F3 page
    <div>
      <Link href={"/f4"}>To F4</Link>
      
      <Link href={"/about"}>To about</Link>
    </div>

    </div>
  )
}
