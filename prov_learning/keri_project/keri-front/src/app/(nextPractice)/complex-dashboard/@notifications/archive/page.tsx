import Card from '@/app/(nextPractice)/component/card'
import Link from 'next/link'
import React from 'react'

export default function Archive() {
  return (
    <Card>Archive Notifications 
    <Link href={"/complex-dashboard"}> default</Link>
    </Card>
  )
}
