import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import MainLayout from './mainLayout/MainLayout'
import Dashboard from './mainLayout/Dashboard'
import RegionView from '../Day11/ViewSaga/Region/Region'
import Employee from '../Day11/ViewSaga/Employee/Employee'

export default function Routes() {
	return useRoutes([
		{
			path: '/',
			element: <MainLayout/>,
			children: [
				{path: 'dashboard', element: <Dashboard/>},
				{path: 'region', element: <RegionView/>},
				{path: 'employee', element: <Employee/>}
			]
		},
		{path: '*', element: <Navigate to='404' replace/>}
	])
}
