import React, { useState, useEffect } from 'react'
import dependentAPI from '../API/dependentAPI'

export default function Dependent() {
	const [dependent, setDependent] = useState([])

	useEffect(() => {
		dependentAPI.list().then(data => {
			setDependent(data)
		})
	}, [])

	return (
		<div>
			<h2>List Dependent</h2>
			{
				<table>
					<thead>
						<th>Dependent ID</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Relationship</th>
						<th>Employee ID</th>
					</thead>
					<tbody>
						{
							dependent.map(dep => (
								<tr key={dep.dependent_id}>
									<td>{dep.dependent_id}</td>
									<td>{dep.first_name}</td>
									<td>{dep.last_name}</td>
									<td>{dep.relationship}</td>
									<td>{dep.employee_id}</td>
								</tr>
							))
						}
					</tbody>
				</table>
			}
		</div>
	)
}