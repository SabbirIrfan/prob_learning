import React from 'react'
import Card from '../../component/card'

export default async function Login() {
  await new Promise((resolve) => setTimeout(resolve, 4000))
  return (
    <Card>Login Please</Card>
  )
}
