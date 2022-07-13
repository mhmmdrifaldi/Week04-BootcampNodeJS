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
						<th>Country</th>
					</thead>
					<tbody>
						{
							region.map(reg => {
								return (
									<tr key={reg.region_id}>
										<td>{reg.region_id}</td>
										<td>{reg.region_name}</td>
										<table>
											<thead>
												<th>Country ID</th>
												<th>Country Name</th>
											</thead>
											<tbody>
												{reg.countries.map(cty => {
													return (
														<tr key={cty.country_id}>
															<td>{cty.country_id}</td>
															<td>{cty.country_name}</td>
														</tr>
													)
												})}
											</tbody>
										</table>
									</tr>
								)
							})
						}
					</tbody>
				</table>
			}
		</div>
	)
}