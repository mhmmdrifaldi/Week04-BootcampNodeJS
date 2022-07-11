import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import Dashboard from './mainLayout/MainLayout'
import RegionView from './Region/RegionView'

export default function Routes() {
	return useRoutes([
		{
			path: '/',
			element: <Dashboard/>,
			children: [
				{path: 'region', element: <RegionView/>}
			]
		},
		{path: '*', element: <Navigate to='404' replace/>}
	])
}
