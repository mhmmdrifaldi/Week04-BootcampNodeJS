import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ChartForm from '../../Day03/Form/ChartForm'
import { doGetCart, doAddCart } from '../Redux/Action'

export default function CartListRedux() {
	const dispatch = useDispatch()
	const carts = useSelector(state => state.carts)
	const category = useSelector(state => state.category)
	const totalHarga = useSelector(state => state.totalHarga)
	const totalQty = useSelector(state => state.totalQty)

	const [display, setDisplay] = useState(false)
	const [values, setValues] = useState({
		prodName: undefined,
		qty: 0,
		salary: 0,
		category: undefined
	})

	const handleOnChange = name => event => {
		setValues({...values, [name]: event.target.value})
	}
	
	const onSubmit = (event) => {
		event.preventDefault()
		const payload = {
			prodId: carts.length + 1,
			prodName: values.prodName,
			qty: values.qty,
			salary: values.salary,
			category: values.category
		}
		dispatch(doAddCart(payload))
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
					handleOnChange = {handleOnChange}
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
