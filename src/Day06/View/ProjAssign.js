import React, { useState, useEffect } from 'react'
import projAssignAPI from '../API/projAssignAPI'

export default function ProjAssign() {
	const [projAssign, setProjAssign] = useState([])

	useEffect(() => {
		projAssignAPI.list().then(data => {
			setProjAssign(data)
		})
	}, [])

	return (
		<div>
			<h2>List Project Assignment</h2>
			{
				<table>
					<thead>
						<th>Pras Project ID</th>
						<th>Pras Employee ID</th>
						<th>Start Date</th>
						<th>End Date</th>
						<th>Status</th>
					</thead>
					<tbody>
						{
							projAssign.map(assign => (
								<tr key={assign.pras_proj_id}>
									<td>{assign.pras_proj_id}</td>
									<td>{assign.pras_employee_id}</td>
									<td>{assign.pras_startdate}</td>
									<td>{assign.pras_enddate}</td>
									<td>{assign.pras_status}</td>
								</tr>
							))
						}
					</tbody>
				</table>
			}
		</div>
	)
}