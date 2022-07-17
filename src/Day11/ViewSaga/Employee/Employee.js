import React, { useState, useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { GetEmployeeRequest,DelEmployeeRequest } from '../../Redux-Saga/Action/EmployeeAction'
import EmployeeAdd from './EmployeeAdd'
import EmpionEdit from './EmployeeEdit'
import config from '../../../Config/config'

export default function EmployeeView() {
  const dispatch = useDispatch()
  const [display, setDisplay] = useState(false)
  const [displayEdit, setDisplayEdit] = useState(false)
  const [refresh, setRefresh] = useState(false)
  const [id, setId] = useState()
  const {employees} = useSelector(state => state.employeeStated)
    
  useEffect(() => {
    dispatch(GetEmployeeRequest())
  }, [dispatch])

  const onDelete = async (id) =>{
    dispatch(DelEmployeeRequest(id))
    window.alert('Data Succesfully Deleted')
  }
  
	const onClick = (empID) => {
    setDisplayEdit(true)
    setId(empID)
  }
    
	return (
    <div>
      <div className="relative overflow-x-auto -md sm:rounded-lg">
        {
          displayEdit ?
            <EmpionEdit
              closeAdd={() => setDisplayEdit(false)}
              onRefresh={() => setRefresh(true)}
              id={id}
              setDisplay={setDisplayEdit}
            />
          :
          display ?
            <EmployeeAdd
              setDisplay={setDisplay}
              closeAdd={() => setDisplay(false)}
              onRefresh={() => setRefresh(true)}
            />
          :
          <>
            <div>
              <h1 className='text-center mb-4 text-2xl font-bold'>LIST EMPLOYEES</h1>
            </div>
            <button 
              type="button" 
              className="mb-1 my-2 cursor-pointer inline-flex justify-center py-2 px-5 text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400" 
              onClick={() => setDisplay(true)}
            >
              {
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              } 
            </button>
            <table className="w-full text-sm text-left table-auto shadow-lg shadow-emerald-50">
              <thead className="text-xs text-slate-900 uppercase bg-teal-300">
                <tr>
                  <th scope="col" className="px-6 py-3">Employee ID</th>
                  <th scope="col" className="px-6 py-3">First Name</th>
                  <th scope="col" className="px-6 py-3">Last Name</th>
                  <th scope="col" className="px-6 py-3">Email</th>
                  <th scope="col" className="px-6 py-3">Phone Number</th>
                  <th scope="col" className="px-6 py-3">Hire Date</th>
                  <th scope="col" className="px-6 py-3">Employee Profile</th>
                  <th scope="col" className="px-6 py-3">Setting</th>
                </tr>
              </thead>
              <tbody className="overscroll-auto md:overscroll-contain">
                {
                  employees && employees.map(emp => {
                    return (
                      <tr key={emp.employee_id} className="bg-emerald-50 border border-emerald-100">
                        <td scope="row" className="px-6 py-2 font-medium text-gray-900 dark:text-black whitespace-nowrap">{emp.employee_id}</td>
                        <td className="px-6 py-2">{emp.first_name}</td>
                        <td className="px-6 py-2">{emp.last_name}</td>
                        <td className="px-6 py-2">{emp.email}</td>
                        <td className="px-6 py-2">{emp.phone_number}</td>
                        <td className="px-6 py-2">{emp.hire_date}</td>
                        <td className="px-6 py-2"><img crossOrigin='' src={config.domain + '/employee/file/' + emp.emp_profile}/></td>
                        <td className="px-6 py-2">
                        <td className='py-2'>
                          <button
                            type="button"
                            className="cursor-pointer inline-flex justify-center py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400" 
                            onClick={() => onDelete(emp.employee_id)}
                          >
                            {
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            }
                          </button>
                        </td>
                        <button
                              type="button"
                              className="cursor-pointer inline-flex justify-center py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400" 
                              onClick={() => onClick(emp.employee_id)}
                            >
                              {
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                              }
                            </button>
                          </td>
                        </tr>
                      )
                    })
                }
              </tbody>
            </table>
          </>
        }
      </div>
    </div>
  )
}