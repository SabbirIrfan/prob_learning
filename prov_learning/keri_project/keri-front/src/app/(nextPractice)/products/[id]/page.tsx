import Modal from '@/app/(nextPractice)/component/modal';
import React from 'react'

export default async function page({
  params: { id },
}: {
  params: { id: string };
}) {
  const detailsResponse = await fetch(`http://localhost:3001/products/${id}`);
  const details = await detailsResponse.json();
    // console.log("hello")

  return (
    <>
      <div>
        {details.title}
      </div>
   
  </>
  )
}
