import React,{useState} from 'react'

export default function EmployeeList() {
  const listEmployee =[
    {empId : 1, fullName : 'Naufal', salary : 4500},
    {empId : 2, fullName : 'Firdaus', salary : 5000},
    {empId : 3, fullName : 'Ahmad', salary : 5500}
  ]
  
	const [employee, setEmployee] = useState(listEmployee)

  const penambahanGaji = (id) => {
    setEmployee(
      [...employee.map(emp=>{
        if (id === emp.empId) {
          emp.salary +=  500
          return emp
        }
        else{
          return emp
        }
      })]
    )
  }

	const penguranganGaji = (id) => {
    setEmployee(
      [...employee.map(emp=>{
        if (id === emp.empId) {
          if(emp.salary > 0) {
						emp.salary -= 500
					}
					return emp
        }
        else{
          return emp
        }
      })]
    )
  }

	const raiseSalary = (id) => {
    setEmployee(
      [...employee.map(emp=>{
        if (id === emp.empId) {
					emp.salary = Math.round(emp.salary + (emp.salary * (10/100)))
					return emp
        }
        else{
          return emp
        }
      })]
    )
  }

	const cutSalary = (id) => {
    setEmployee(
      [...employee.map(emp=>{
        if (id === emp.empId) {
					emp.salary = Math.round(emp.salary - (emp.salary * (5/100)))
					return emp
        }
        else{
          return emp
        }
      })]
    )
  }
    
  return (
    <div>
      <h2>List Employee</h2>
      <ul>
        {
          (employee || []).map(emp=>(
            <li key={emp.empId}>
          	  <p>Emp Id : {emp.empId}</p>
              <p>Full Name : {emp.fullName}</p>
              <p>Salary : {emp.salary}</p>
              <button onClick={()=>penambahanGaji(emp.empId)}>Penambahan Gaji</button>
              <button onClick={()=>penguranganGaji(emp.empId)}>Pengurangan Gaji</button>
              <button onClick={()=>raiseSalary(emp.empId)}>Raise salary 10%</button>
              <button onClick={()=>cutSalary(emp.empId)}>Cut salary 5%</button>
            </li>
          ))
        }
  	  </ul>
    </div>
  )
}