import React from 'react'

export default function ChartForm(props) {
	return (
		<div>
			<form onSubmit={props.onSubmitForm}>
				<div>
					<label>Product Name : </label>
					<input type='text' placeholder='Product Name' onChange={props.handleOnChange('prodName')}/>
				</div>
				<div>
					<label>Quantity : </label>
					<input type='number' placeholder='Quantity' onChange={props.handleOnChange('qty')}/>
				</div>
				<div>
					<label>Salary : </label>
					<input type='number' placeholder='Salary' onChange={props.handleOnChange('salary')}/>
				</div>
				<div>
					<label>Category : </label>
					<select onChange={props.selectOnChange}>
						<option> ---Choice Category--- </option>
						{
							props.category.map((values, index) =>
							<option key={index}>{values}</option>
							)
						}
					</select>
				</div>
				<div>
					<button type='submit'>Simpan</button>
					<button onClick={()=> props.setDisplay(false)}>Cancel</button>
				</div>
			</form>
		</div>
	)
}
