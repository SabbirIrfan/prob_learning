import Link from 'next/link'
import React from 'react'

export default function sameLevel() {
  return (
    <div>
     sameLevel
    <div>
      <Link href={"/sameLevel/level1"}>To (.) level1</Link>
    </div>

    </div>
  )
}
