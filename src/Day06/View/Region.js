import React, { useState, useEffect } from 'react'
import regionAPI from '../API/regionAPI'

export default function Region() {
	const [region, setRegion] = useState([])

	useEffect(() => {
		regionAPI.list().then(data => {
			setRegion(data)
		})
	}, [])

	return (
		<div>
			<h2>List Region</h2>
			{
				<table>
					<thead>
						<th>Region ID</th>
						<th>Region Name</th>
					</thead>
					<tbody>
						{
							region.map(reg => (
								<tr key={reg.region_id}>
									<td>{reg.region_id}</td>
									<td>{reg.region_name}</td>
								</tr>
							))
						}
					</tbody>
				</table>
			}
		</div>
	)
}