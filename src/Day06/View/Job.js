import React, { useState, useEffect } from 'react'
import jobAPI from '../API/jobAPI'

export default function Job() {
	const [job, setJob] = useState([])

	useEffect(() => {
		jobAPI.list().then(data => {
			setJob(data)
		})
	}, [])

	return (
		<div>
			<h2>List Job</h2>
			{
				<table>
					<thead>
						<th>Job ID</th>
						<th>Job Title</th>
						<th>Min Salary</th>
						<th>Max Salary</th>
					</thead>
					<tbody>
						{
							job.map(jobs => (
								<tr key={jobs.job_id}>
									<td>{jobs.job_id}</td>
									<td>{jobs.job_title}</td>
									<td>{jobs.min_salary}</td>
									<td>{jobs.max_salary}</td>
								</tr>
							))
						}
					</tbody>
				</table>
			}
		</div>
	)
}