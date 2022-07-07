import React, { useState, useEffect } from 'react'
import departmentAPI from '../API/departmentAPI'

export default function Department() {
	const [department, setDepartment] = useState([])

	useEffect(() => {
		departmentAPI.list().then(data => {
			setDepartment(data)
		})
	}, [])

	return (
		<div>
			<h2>List Department</h2>
			{
				<table>
					<thead>
						<th>Department ID</th>
						<th>Department Name</th>
						<th>Location ID</th>
					</thead>
					<tbody>
						{
							department.map(dept => (
								<tr key={dept.department_id}>
									<td>{dept.department_id}</td>
									<td>{dept.department_name}</td>
									<td>{dept.location_id}</td>
								</tr>
							))
						}
					</tbody>
				</table>
			}
		</div>
	)
}