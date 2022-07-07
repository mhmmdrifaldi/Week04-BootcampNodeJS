import React, { useState, useEffect } from 'react'
import locationAPI from '../API/locationAPI'

export default function Location() {
	const [location, setLocation] = useState([])

	useEffect(() => {
		locationAPI.list().then(data => {
			setLocation(data)
		})
	}, [])

	return (
		<div>
			<h2>List Location</h2>
			{
				<table>
					<thead>
						<th>Location ID</th>
						<th>Street Address</th>
						<th>Postal Code</th>
						<th>City</th>
						<th>State Province</th>
						<th>Country ID</th>
					</thead>
					<tbody>
						{
							location.map(lok => (
								<tr key={lok.location_id}>
									<td>{lok.location_id}</td>
									<td>{lok.street_address}</td>
									<td>{lok.postal_code}</td>
									<td>{lok.city}</td>
									<td>{lok.state_province}</td>
									<td>{lok.country_id}</td>
								</tr>
							))
						}
					</tbody>
				</table>
			}
		</div>
	)
}