import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import Dashboard from './mainLayout/Dashboard'
import RegionView from '../Day11/ViewSaga/Region/Region'
import EmployeeView from '../Day11/ViewSaga/Employee/Employee'

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
