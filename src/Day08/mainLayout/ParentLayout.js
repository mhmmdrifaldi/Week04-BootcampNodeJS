import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function ParentLayout() {
	return (
		<div className='w-full mx-auto sm:px-6 lg:px-8'>
			<div className='flex justify-evenly my-9'>
				<Link to='children1'>
					<button className='cursor-pointer inline-flex justify-center py-2 px-10 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400'>
						ChildrenLayout1
					</button>
				</Link>
				<Link to='children2'>
					<button className='cursor-pointer inline-flex justify-center py-2 px-10 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400'>
						ChildrenLayout2
					</button>
				</Link>
			</div>
			<div>
				<Outlet/>
			</div>
		</div>
	)
}
