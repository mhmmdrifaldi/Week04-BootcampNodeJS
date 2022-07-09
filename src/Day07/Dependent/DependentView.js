import React, { useState, useEffect } from 'react'
import dependentAPI from './dependentAPI'
import DependentAdd from './DependentAdd'

export default function DependentView() {
	const [dependent, setDependent] = useState([])
	const [display, setDisplay] = useState(false)
  const [refresh, setRefresh] = useState(false)
  const [values, setValues] = useState({
    dependent_id: undefined,
    first_name: '',
		last_name: '',
		relationship: '',
		employee_id: undefined
  })

	useEffect(() => {
		dependentAPI.list().then(data => {
			setDependent(data)
		})
		setRefresh(false)
	}, [refresh])

	const handleOnChange = name => event => {
		setValues({ ...values, [name]: event.target.value })
	}

	const onSubmit = async () => {
		const payload = {
			first_name: (values.first_name),
			last_name: (values.last_name),
			relationship: (values.relationship),
			employee_id: (values.employee_id)
		}

		await dependentAPI.create(payload)
			.then(() => {
				setDisplay(false)
				setRefresh(true)
				window.alert('Data Successfully Insert')
			})
	}

	const onDelete = async (id) => {
		dependentAPI.deleted(id)
			.then(() => {
				setRefresh(true)
				window.alert('Data Successfully Delete')
			})
	}

	return (
		<div>
			<h2>List Dependent</h2>
			<button onClick={() => setDisplay(true)}> Add Dependent </button>
			{
				display ?
				<DependentAdd
					onSubmit={onSubmit}
					handleOnChange={handleOnChange}
					setDisplay={setDisplay}
				/>
				:
				<>
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
										<button onClick={() => onDelete(dep.dependent_id)}> Delete Dependent </button>
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