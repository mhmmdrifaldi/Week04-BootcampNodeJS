import React, { useState, useEffect } from 'react'
import locationAPI from './locationAPI'
import LocationAdd from './LocationAdd'

export default function LocationView() {
	const [location, setLocation] = useState([])
	const [display, setDisplay] = useState(false)
  const [refresh, setRefresh] = useState(false)
  const [values, setValues] = useState({
    location_id: undefined,
    street_address: '',
		postal_code: undefined,
		city: '',
		state_province: '',
		country_id: ''
  })

	useEffect(() => {
		locationAPI.list().then(data => {
			setLocation(data)
		})
		setRefresh(false)
	}, [refresh])

	const handleOnChange = name => event => {
		setValues({ ...values, [name]: event.target.value })
	}

	const onSubmit = async () => {
		const payload = {
			location_id: (values.location_id),
			street_address: (values.street_address),
			postal_code: (values.postal_code),
			city: (values.city),
			state_province: (values.state_province),
			country_id: (values.country_id)
		}

		await locationAPI.create(payload)
			.then(() => {
				setDisplay(false)
				setRefresh(true)
				window.alert('Data Successfully Insert')
			})
	}

	const onDelete = async (id) => {
		locationAPI.deleted(id)
			.then(() => {
				setRefresh(true)
				window.alert('Data Successfully Delete')
			})
	}

	return (
		<div>
			<h2>List Location</h2>
			<button onClick={() => setDisplay(true)}> Add Location </button>
      {
        display ?
        	<LocationAdd
            onSubmit={onSubmit}
            handleOnChange={handleOnChange}
            setDisplay={setDisplay}
        	/>
          :
          <>
						{
							<table>
								<thead>
									<th>Location ID</th>
									<th>Street Address</th>
									<th>Postal Code</th>
									<th>City</th>
									<th>State Province</th>
									<th>Country ID</th>
								</thead>
								<tbody>
									{
										location.map(lok => (
											<tr key={lok.location_id}>
													<td>{lok.location_id}</td>
													<td>{lok.street_address}</td>
													<td>{lok.postal_code}</td>
													<td>{lok.city}</td>
													<td>{lok.state_province}</td>
													<td>{lok.country_id}</td>
													<button onClick={() => onDelete(lok.location_id)}> Delete Location </button>
											</tr>
										))
									}
								</tbody>
							</table>
						}
					</>
			}
		</div>
	)
}