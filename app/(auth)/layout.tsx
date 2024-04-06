import React from 'react'

const AuthLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className='flex bg-purple-100 justify-center items-center min-h-screen'>{children}</main>
  )
}

export default AuthLayout