import React, { useState, useEffect } from 'react'
import regionAPI from './regionAPI'
import RegionAdd from './RegionAdd'
import RegionEdit from './RegionEdit'

export default function RegionView() {
	const [region, setRegion] = useState([])
	const [display, setDisplay] = useState(false)
	const [displayEdit, setDisplayEdit] = useState(false)
  const [refresh, setRefresh] = useState(false)
	const [id, setId] = useState({})
  const [values, setValues] = useState({
    region_id: undefined,
    region_name: ''
  })

	useEffect(() => {
		regionAPI.list().then(data => {
			setRegion(data)
		})
		setRefresh(false)
	}, [refresh])

	const handleOnChange = name => event => {
		setValues({ ...values, [name]: event.target.value })
	}

	const onSubmit = async () => {
		const payload = {
			region_name: (values.region_name)
		}

		await regionAPI.create(payload)
			.then(() => {
				setDisplay(false)
				setRefresh(true)
				window.alert('Data Successfully Insert')
			})
	}

	const onClick = (regID) => {
		setDisplayEdit(true)
		setId(regID)
	}

	const onEdit = async () => {
		const payload = {
			region_id: (id.regID),
			region_name: (values.region_name)
		}

		await regionAPI.update(payload)
			.then(() => {
				setDisplayEdit(false)
				setRefresh(true)
				window.alert('Data Successfully Edit')
			})
	}

	const onDelete = async (id) => {
		regionAPI.deleted(id)
			.then(() => {
				setRefresh(true)
				window.alert('Data Successfully Delete')
			})
	}

	return (
		<div>
			<h2>List Region</h2>
      <button onClick={() => setDisplay(true)}> Add Region </button>
      {
				displayEdit ?
				<RegionEdit
					onSubmit={onEdit}
					handleOnChange={handleOnChange}
					id={id}
					setDisplay={setDisplayEdit}
				/>
				:
        display ?
        	<RegionAdd
            onSubmit={onSubmit}
            handleOnChange={handleOnChange}
            setDisplay={setDisplay}
        	/>
          :
          <>
            <table>
							<thead>
              	<th>Region ID</th>
              	<th>Region Name</th>
							</thead>
							<tbody>
                {
                  region.map(reg => {
                    return (
                      	<tr key={reg.region_id}>
                        	<td>{reg.region_id}</td>
                          <td>{reg.region_name}</td>
                          <button onClick={() => onDelete(reg.region_id)}> Delete Region </button>
													<button onClick={() => onClick({ regID: reg.region_id })}> Edit Region </button>
                      	</tr>
                      )
                  })
                }
              </tbody>
            </table>
        	</>
      }
		</div>
	)
}