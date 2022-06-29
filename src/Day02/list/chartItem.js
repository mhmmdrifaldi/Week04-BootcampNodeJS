import React,{useState,useEffect} from 'react'

export default function ChartItem() {
  const listChart = [
    {prodId : 1, prodName : 'Shampoo', qty : 1, salary : 5000},
    {prodId : 2, prodName : 'Shoap', qty : 1, salary : 4000},
    {prodId : 3, prodName : 'Tooth Paste', qty : 1, salary : 6000},
  ]
  
	const [cart, setCart] = useState(listChart)
	const [total, setTotal] = useState(0)
  const [totalQty, setTotalQty] = useState(0)

  useEffect(()=>{
    const TotalHarga = cart.reduce((jumlah, data)=>jumlah + (data.salary * data.qty), 0)
    	setTotal(TotalHarga)
    const TotalQuantity = cart.reduce((jumlah, data)=> jumlah + data.qty, 0)
      setTotalQty(TotalQuantity)
  })

	const tambahQty = (id) => {
    setCart(
      [...cart.map(carts=>{
        if (id === carts.prodId) {
          carts.qty +=  1
          return carts
        }
        else{
          return carts
        }
      })]
    )
  }

	const kurangiQty = (id) => {
    setCart(
      [...cart.map(carts=>{
        if (id === carts.prodId) {
          if(carts.qty > 0) {
						carts.qty -=  1
					}
          return carts
        }
        else{
          return carts
        }
      })]
    )
  }
    
  return (
    <div>
      <h2>List of Carts</h2>
      <table>
        <thead>
					<tr>
				  	<th>Product ID</th>
          	<th>Product Name</th>
          	<th>Quantity</th>
          	<th>Salary</th>
          	<th>Sub Total</th>
          	<th>Action</th>
					</tr>
				</thead>
        <tbody>
          {
            (cart || []).map(carts=>(
              <tr key={carts.prodId}>
                <td>{carts.prodId}</td>
                <td>{carts.prodName}</td>
                <td>{carts.qty}</td>
                <td>{carts.salary}</td>
                <td>{carts.qty * carts.salary}</td>
                <td>
                  <button onClick={()=>tambahQty(carts.prodId)}>+ Tambah Barang</button>
                  <button onClick={()=>kurangiQty(carts.prodId)}>- Kurangi Barang</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    	<h3>Total Harga : Rp.{total} </h3>
    	<h3>Total Quantity : {totalQty} </h3>
	  </div>
  )
}