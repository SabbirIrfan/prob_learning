"use client"
import React, { useEffect } from 'react'

export const error = ({error}:{error:Error}) => {
    useEffect(()=>{
        console.log(error)
    }),[error];
  return (
    <div className='flex items-center justify-center h-screen'>
        <div className='flex items-center justify-center h-screen text-2xl text-red-500'> Error fetching data</div>
    </div>
  )
}

export default error;