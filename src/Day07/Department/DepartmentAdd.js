import React from 'react'

export default function DepartmentAdd(props) {
	return (
		<div>
			<form onSubmit={props.onSubmit}>
      	<div>
          <label>Department Name : </label>
          <input type="text" placeholder="Department Name" 
          onChange = {props.handleOnChange('department_name')}/>
        </div>
				<div>
          <label>Location ID : </label>
          <input type="number" placeholder="Location ID" 
          onChange = {props.handleOnChange('location_id')}/>
        </div>
        <div>
          <button type='submit'> Simpan </button>
          <button onClick={()=>props.setDisplay(false)}> Cancel </button>
        </div>
      </form>
		</div>
	)
}
