import React, { useState, useEffect } from 'react'
import countryAPI from './countryAPI'
import CountryAdd from './CountryAdd'

export default function CountryView() {
	const [country, setCountry] = useState([])
	const [display, setDisplay] = useState(false)
  const [refresh, setRefresh] = useState(false)
  const [values, setValues] = useState({
    country_id: undefined,
    country_name: '',
		region_id: undefined
  })

	useEffect(() => {
		countryAPI.list().then(data => {
			setCountry(data)
		})
		setRefresh(false)
	}, [refresh])

	const handleOnChange = name => event => {
		setValues({ ...values, [name]: event.target.value })
	}

	const onSubmit = async () => {
		const payload = {
			country_id: (values.country_id),
			country_name: (values.country_name),
			region_id: (values.region_id)
		}

		await countryAPI.create(payload)
			.then(() => {
				setDisplay(false)
				setRefresh(true)
				window.alert('Data Successfully Insert')
			})
	}

	const onDelete = async (id) => {
		countryAPI.deleted(id)
			.then(() => {
				setRefresh(true)
				window.alert('Data Successfully Delete')
			})
	}

	return (
		<div>
			<h2>List Country</h2>
			<button onClick={() => setDisplay(true)}> Add Country </button>
      {
        display ?
        	<CountryAdd
            onSubmit={onSubmit}
            handleOnChange={handleOnChange}
            setDisplay={setDisplay}
        	/>
          :
          <>
						{
							<table>
								<thead>
									<th>Country ID</th>
									<th>Country Name</th>
									<th>Region ID</th>
								</thead>
								<tbody>
									{
										country.map(kota => (
											<tr key={kota.country_id}>
												<td>{kota.country_id}</td>
												<td>{kota.country_name}</td>
												<td>{kota.region_id}</td>
												<button onClick={() => onDelete(kota.country_id)}> Delete Country </button>
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