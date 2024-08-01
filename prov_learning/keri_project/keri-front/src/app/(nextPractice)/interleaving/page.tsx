import React from 'react'
import { ServerComponentOne } from '../component/server-component-one'
import ClientComponentOne from '../component/client-component-one'

export default function Interleaving() {
  return (

    <div>
      <p>Interleaving</p>
      {/* <ServerComponentOne/> */}
      <ClientComponentOne >
         <ServerComponentOne/>
      </ClientComponentOne>
    </div>
  )
}
