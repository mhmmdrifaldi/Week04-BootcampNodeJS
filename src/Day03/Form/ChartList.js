import React, { useState, useEffect } from 'react'
import ChartForm from './ChartForm'

export default function ChartList() {
	const listCart = [
		{prodId: 1, prodName: 'Dell', qty: 1, salary: 5000, category: 'Laptop'},
		{prodId: 2, prodName: 'Gamis', qty: 1, salary: 4000, category: 'Baju'},
		{prodId: 3, prodName: 'Xiaomi', qty: 1, salary: 6000, category: 'Handphone'}
	]

	const [carts, setCarts] = useState(listCart)
	const [category] = useState(['Handphone', 'Laptop', 'Baju', 'Alat Rumah Tangga'])
	const [totalHarga, setTotalHarga] = useState(0)
	const [totalQty, setTotalQty] = useState(0)
	const [display, setDisplay] = useState(false)
	const [values, setValues] = useState({
		prodName: undefined,
		qty: 0,
		salary: 0,
		category: undefined
	})

	useEffect(() => {
		const totalHarga = carts.reduce((jumlah, data) => jumlah + (data.qty * data.salary), 0)
			setTotalHarga(totalHarga)
		const totalQuantity = carts.reduce((jumlah, data) => jumlah + (data.qty * 1), 0)
			setTotalQty(totalQuantity)
	}, [carts])
	
	const handleChange = name => event => {
		setValues({...values, [name]: event.target.value})
	}

	const onSubmit = (event) => {
		event.preventDefault()
		setCarts([...carts, {
			prodId: carts.length + 1,
			prodName: values.prodName,
			qty: values.qty,
			salary: values.salary,
			category: values.category
		}])
		setDisplay(false)
	}

	const selectOnChange = event => {
		const value = event.target.selectedIndex !== 0 ?
		event.target.options[event.target.selectedIndex].value : null
		setValues({...values, category: value})
	}

	return (
		<div>
			<h2>List Carts</h2>
			<button onClick={()=> setDisplay(true)}>+ Add Product</button>
			{
				display ?
				<ChartForm
					onSubmitForm = {onSubmit}
					handleOnChange = {handleChange}
					category = {category}
					selectOnChange = {selectOnChange}
					setDisplay = {setDisplay}
				/>
				:
				<>
					<table>
						<thead>
							<th>Product ID</th>
							<th>Product Name</th>
							<th>Quantity</th>
							<th>Salary</th>
							<th>Categoty</th>
							<th>SubTotal</th>
						</thead>
						<tbody>
							{
								(carts || []).map(cart => (
									<tr key={cart.prodId}>
										<td>{cart.prodId}</td>
										<td>{cart.prodName}</td>
										<td>{cart.qty}</td>
										<td>{cart.salary}</td>
										<td>{cart.category}</td>
										<td>{cart.qty * cart.salary}</td>
									</tr>
								))
							}
						</tbody>
					</table>
					<h3>Total Salary : Rp. {totalHarga}</h3>
					<h3>Total Quantity : {totalQty}</h3>
				</>
			}			
		</div>
	)
}
