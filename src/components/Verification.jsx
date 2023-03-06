import React from 'react'
import { useLocation } from 'react-router'

function Verify() {
    const {username,email} = useLocation().state
  return (
    <main id="verification" className='flex bg-gradient-to-r from-red-500 to-pink-300 justify-center items-center w-full h-screen pt-20 bg-red-200'>
        <section className="modal bg-white  w-4/5 lg:w-1/2 shadow-lg rounded-lg p-8">
            <h1>
               😊 Hello {username} ,
            </h1>
            <h2>
              Your email is not yet verified ❌
            </h2>
            <h3 className='my-8'>
                Check your email 💌 <a href={`mailto:${email}`} className=' text-blue-500'> {' '} {email} {' '}</a>  for your verification link to verify your email account
            </h3>
        </section>
    </main>
  )
}

export default Verify