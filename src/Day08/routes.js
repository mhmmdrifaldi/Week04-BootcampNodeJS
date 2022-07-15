import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import Dashboard from './mainLayout/Dashboard'
import RegionView from './Region/RegionView'
import EmployeeView from '../Day09&10/EmployeeView'

export default function Routes() {
	return useRoutes([
		{
			path: '/',
			element: <Dashboard/>,
			children: [
				{path: 'region', element: <RegionView/>},
				{path: 'employee', element: <EmployeeView/>}
			]
		},
		{path: '*', element: <Navigate to='404' replace/>}
	])
}
