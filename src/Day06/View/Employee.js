import React, { useState, useEffect } from 'react'
import employeeAPI from '../API/employeeAPI'

export default function Employee() {
	const [employee, setEmployee] = useState([])

	useEffect(() => {
		employeeAPI.list().then(data => {
			setEmployee(data)
		})
	}, [])

	return (
		<div>
			<h2>List Employee</h2>
			{
				<table>
					<thead>
						<th>Employee ID</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
						<th>Phone Number</th>
						<th>Hire Date</th>
						<th>Job ID</th>
						<th>salary</th>
						<th>Manager ID</th>
						<th>Department ID</th>
					</thead>
					<tbody>
						{
							employee.map(emp => (
								<tr key={emp.employee_id}>
									<td>{emp.employee_id}</td>
									<td>{emp.first_name}</td>
									<td>{emp.last_name}</td>
									<td>{emp.email}</td>
									<td>{emp.phone_number}</td>
									<td>{emp.hire_date}</td>
									<td>{emp.job_id}</td>
									<td>{emp.salary}</td>
									<td>{emp.manager_id}</td>
									<td>{emp.department_id}</td>
								</tr>
							))
						}
					</tbody>
				</table>
			}
		</div>
	)
}