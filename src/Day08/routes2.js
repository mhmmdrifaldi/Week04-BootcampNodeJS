import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Disclosure } from '@headlessui/react'
import Dashboard from './mainLayout/Dashboard';
import Region from '../Day11/ViewSaga/Region/Region'
import Employee from '../Day11/ViewSaga/Employee/Employee';
import ParentLayout from './mainLayout/ParentLayout';
import ChildrenLayout1 from './mainLayout/ChildrenLayout1';
import ChildrenLayout2 from './mainLayout/ChildrenLayout2';

export default function Routes2() {
	return (
		<>
			<Disclosure as="nav" className="bg-teal-700">
        <div className="flex justify-between h-16 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex-shrink-0">
            <img
              className="h-8 w-8"
              src="https://tailwindui.com/img/logos/workflow-mark-white.svg"
          	  alt="Workflow"
          	/>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
              	href='/'
                className='px-3 py-2 rounded-md text-sm font-medium bg-teal-900 text-white'
              >
                Dashboard
              </a>
							<a
              	href='region'
                className='px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-teal-800 hover:text-white'
              >
                Region
              </a>
							<a
              	href='employee'
                className='px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-teal-800 hover:text-white'
              >
                Employee
              </a>
            </div>
          </div>
        </div>
      </Disclosure>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="region" element={<Region />} />
				<Route path="employee" element={<Employee />} />
				{/* Contoh Penggunaan Children */}
				<Route path="parent" element={<ParentLayout />}>
          <Route path="children1" element={<ChildrenLayout1 />} />
          <Route path="children2" element={<ChildrenLayout2 />} />
        </Route>
			</Routes>
		</>
	)
}
