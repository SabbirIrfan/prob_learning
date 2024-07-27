"use client";
import React, { useEffect, useState } from 'react'
import Card from '../../component/card'
import Link from 'next/link';

export default function notificaitons() {
  const [counter, setCounter] = useState(0);

   useEffect(() => {
    const interval = setInterval(()=>{
      setCounter(counter + 2);
    },2000)
    
    return () => {
      clearInterval(interval);
  
    }
  }, [counter])
  
  return (
    <Card>Notificaitons : {counter}

    <Link href={"/complex-dashboard/archive"}> Archive</Link>
    </Card>
  )
}
