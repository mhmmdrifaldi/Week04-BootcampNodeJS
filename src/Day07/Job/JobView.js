import React, { useState, useEffect } from 'react'
import jobAPI from './jobAPI'
import JobAdd from './JobAdd'

export default function JobView() {
	const [job, setJob] = useState([])
	const [display, setDisplay] = useState(false)
  const [refresh, setRefresh] = useState(false)
  const [values, setValues] = useState({
    job_id: undefined,
    job_title: '',
		min_salary: undefined,
		max_salary: undefined
  })

	useEffect(() => {
		jobAPI.list().then(data => {
			setJob(data)
		})
		setRefresh(false)
	}, [refresh])

	const handleOnChange = name => event => {
		setValues({ ...values, [name]: event.target.value })
	}

	const onSubmit = async () => {
		const payload = {
			job_title: (values.job_title),
			min_salary: (values.min_salary),
			max_salary: (values.max_salary)
		}

		await jobAPI.create(payload)
			.then(() => {
				setDisplay(false)
				setRefresh(true)
				window.alert('Data Successfully Insert')
			})
	}

	const onDelete = async (id) => {
		jobAPI.deleted(id)
			.then(() => {
				setRefresh(true)
				window.alert('Data Successfully Delete')
			})
	}

	return (
		<div>
			<h2>List Job</h2>
			<button onClick={() => setDisplay(true)}> Add Job </button>
			{
				display ?
				<JobAdd
					onSubmit={onSubmit}
					handleOnChange={handleOnChange}
					setDisplay={setDisplay}
				/>
				:
				<>
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
										<button onClick={() => onDelete(jobs.job_id)}> Delete Job </button>
									</tr>
								))
							}
						</tbody>
					</table>
				</>
			}
		</div>
	)
}