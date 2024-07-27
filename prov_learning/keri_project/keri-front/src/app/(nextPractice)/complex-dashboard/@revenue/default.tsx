"use client";
import React, { useState, useEffect } from 'react';  
import Card from '../../component/card';  

export default function DefauldRevenue() {  
  const [counter, setCounter] = useState(0);  

  useEffect(() => {  
    const intervalId = setInterval(() => {  
      setCounter(counter + 1.5);  
    }, 2000);  

    return () => clearInterval(intervalId);  
  }, [counter]);  

  return (  
    <Card>Revenue: {counter}</Card>  
  );  
}