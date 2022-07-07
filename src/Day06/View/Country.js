import React, { useState, useEffect } from 'react'
import countryAPI from '../API/countryAPI'

export default function Country() {
	const [country, setCountry] = useState([])

	useEffect(() => {
		countryAPI.list().then(data => {
			setCountry(data)
		})
	}, [])

	return (
		<div>
			<h2>List Country</h2>
			{
				<table>
					<thead>
						<th>Country ID</th>
						<th>Country Name</th>
						<th>Region ID</th>
					</thead>
					<tbody>
						{
							country.map(kota => (
								<tr key={kota.country_id}>
									<td>{kota.country_id}</td>
									<td>{kota.country_name}</td>
									<td>{kota.region_id}</td>
								</tr>
							))
						}
					</tbody>
				</table>
			}
		</div>
	)
}