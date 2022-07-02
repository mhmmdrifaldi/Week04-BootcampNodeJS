import React, { useState,useEffect } from 'react'

export default function EmployeeForm() {
  const listEmployee = [
    {empId: 1, fullName: 'Muhammad Rifaldi', salary:4500},
    {empId: 2, fullName: 'Ali Chandra', salary:5000},
    {empId: 3, fullName: 'Devrian Zahrani', salary:5500}
  ]

  const [employee, setEmployee] = useState(listEmployee)
  const [total, setTotal] = useState(0)
  const [values, setValues] = useState({
    fullName: undefined,
    salary: 0
  })
  const [display, setDisplay] = useState(false)

  useEffect(()=>{
    const totalSalary = employee.reduce((jumlah, data) => jumlah + (data.salary * 1), 0)
    setTotal(totalSalary)
  },[employee])

  const handleChange = name => event => {
    setValues({...values,[name]:event.target.value})
  }

  const onSubmit = (event) =>{
    event.preventDefault()
    setEmployee([...employee,{
      empId: employee.length + 1,
      fullName: values.fullName,
      salary: values.salary
    }])
    setDisplay(false)
  }

  const renderForm = () => {
    return(
      <form onSubmit={onSubmit}>
        <div>
          <label>Full Name : </label>
          <input type="text" placeholder='Full Name' onChange={handleChange('fullName')}/>
        </div>
        <div>
          <label>Salary : </label>
          <input type="text" placeholder='Salary' onChange={handleChange('salary')}/>
        </div>
        <div>
          <button type='submit'>Simpan</button>
          <button onClick={()=>setDisplay(false)}>Cancel</button>
        </div>
      </form>
    )
  }
  
  return (
    <div>
    <h2>List Employee</h2>
    <button onClick={()=> setDisplay(true)}> Add Employee </button>
      {
        display ? renderForm() : 
          <>
            <table>
              <thead>
                <th>Employee ID</th>
                <th>Full Name</th>
                <th>Salary</th>
              </thead>
              <tbody>
                {
                  (employee || []).map(emp => (
                    <tr key={emp.empId}>
                      <td>{emp.empId}</td>
                      <td>{emp.fullName}</td>
                      <td>{emp.salary}</td>
                      </tr>
                    ))
                }
              </tbody>
            </table>
            <h3>Total Salary : Rp. {total}</h3>
          </>
      }
    </div>
  )
}