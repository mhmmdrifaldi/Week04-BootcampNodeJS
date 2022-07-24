import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <>
      <div className='h-full p-48'>
        <div className="flex justify-center mx-auto py-6 sm:px-6 lg:px-8">
          <h1 className='text-8xl font-extrabold bg-gradient-to-r from-blue-500 via-red-300 to-teal-400 bg-clip-text text-transparent'>
            WELCOME
          </h1>
        </div>
      </div>
      <Link className='flex justify-center' to='parent/children1'>
        <button className='cursor-pointer inline-flex justify-center py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400'>
          Halaman ParentLayout
        </button>
      </Link>
    </>
  )
}