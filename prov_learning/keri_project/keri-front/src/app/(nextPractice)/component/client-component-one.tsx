"use client"
import React, { useState } from 'react'
import ClientComponentTwo from './client-component-two';
import { ServerComponentOne } from './server-component-one';
export default function ClientComponentOne({children}:{children :React.ReactNode}) {
  return (
    <>
    <div>ClientComponentOne</div>
    <ClientComponentTwo />
    {/* <ServerComponentOne/> */}
    {children}
    </>
    
  )
}
