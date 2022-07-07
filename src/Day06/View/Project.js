import React, { useState, useEffect } from 'react'
import projectAPI from '../API/projectAPI'

export default function Project() {
	const [project, setProject] = useState([])

	useEffect(() => {
		projectAPI.list().then(data => {
			setProject(data)
		})
	}, [])

	return (
		<div>
			<h2>List Project</h2>
			{
				<table>
					<thead>
						<th>Project ID</th>
						<th>Project Name</th>
						<th>Createdon</th>
						<th>Due Date</th>
						<th>Customer Name</th>
						<th>Description</th>
						<th>Status</th>
						<th>Amount</th>
						<th>Account Manager</th>
						<th>Employee ID</th>
					</thead>
					<tbody>
						{
							project.map(proj => (
								<tr key={proj.proj_id}>
									<td>{proj.proj_id}</td>
									<td>{proj.proj_name}</td>
									<td>{proj.proj_createdon}</td>
									<td>{proj.proj_duedate}</td>
									<td>{proj.proj_cust_name}</td>
									<td>{proj.proj_description}</td>
									<td>{proj.proj_status}</td>
									<td>{proj.proj_amount}</td>
									<td>{proj.proj_account_mgr}</td>
									<td>{proj.employee_id}</td>
								</tr>
							))
						}
					</tbody>
				</table>
			}
		</div>
	)
}