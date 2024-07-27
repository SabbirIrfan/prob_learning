"use client";
import React, { useEffect, useState } from 'react'
import Card from '../../component/card'

export default function DefaultUsers() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
     const interval = setInterval(()=>{
       setCounter(counter + 1);
     },2000)
     
     return () => {
       clearInterval(interval);
   
     }
   }, [counter])
   
  return (
    <Card>users</Card>
  )
}
