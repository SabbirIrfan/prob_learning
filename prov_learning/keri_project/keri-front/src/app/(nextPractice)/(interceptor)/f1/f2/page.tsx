import Link from 'next/link'
import React from 'react'

export default function F2() {
  return (
    <div>
      F2 page
      <div>
      <Link href={"/f1"}>To F1</Link>
    </div>
      </div>
  )
}
