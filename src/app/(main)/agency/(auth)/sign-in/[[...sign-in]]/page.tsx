import { SignIn } from '@clerk/nextjs'
import React from 'react'
import AuthLayout from '../../layout'

const page = () => {
  return (
    <AuthLayout>
      <SignIn/>
    </AuthLayout>
  )
}

export default page