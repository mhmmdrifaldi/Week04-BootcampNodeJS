import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import employeeAPI from './employeeAPI'

export default function EmployeeAdd(props) {
  const [employee, setEmployee] = useState([])
  const [previewImg, setPreviewImg] = useState();
  const [uploaded, setUploaded] = useState(false);
  
	useEffect(() => {
    employeeAPI.findOne(props.id).then(data => {
      setEmployee(data)
    })
  }, [])
  
	const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      employee_id: employee.employee_id,
      first_name: employee.first_name,
      last_name: employee.last_name,
      email: employee.email,
      phone_number: employee.phone_number,
			hire_date: employee.hire_date,
      job_id: employee.job_id,
      salary: employee.salary,
      manager_id: employee.manager_id,
      department_id: employee.department_id,
      emp_profile: employee.emp_profile,
    },
    
		onSubmit: async (values) => {
      let payload = new FormData();
        payload.append('first_name', values.first_name)
        payload.append('last_name', values.last_name)
        payload.append('email', values.email)
        payload.append('phone_number', values.phone_number)
				payload.append('hire_date', values.hire_date)
        payload.append('job_id', values.job_id)
        payload.append('salary', values.salary)
        payload.append('manager_id', values.manager_id)
        payload.append('department_id', values.department_id)
        payload.append('emp_profile', values.profile)
        payload.append('employee_id', values.employee_id)

        await employeeAPI.update(payload)
        .then(() => {
          props.closeAdd();
          window.alert('Data Succesfully Edited')
          props.onRefresh();
        })
      }
  })

  const uploadOnChange = name => event => {
    let reader = new FileReader()
    let file = event.target.files[0]

    reader.onload = () => {
      formik.setFieldValue('profile', file);
      setPreviewImg(reader.result)
    }
    reader.readAsDataURL(file);
    setUploaded(true)
  }

  const onClearImage = event => {
    event.preventDefault();
    setUploaded(false);
    setPreviewImg(null)
  }
  
	return (
    <div>
    	<div>
        <label class="block text-sm font-medium text-gray-700">First Name : </label>
        <input
          class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          type="text"
          name="first_name"
          id="first_name"
          value={formik.values.first_name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="first_name"
        />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700">Last Name : </label>
        <input
          class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          type="text"
          name="last_name"
          id="last_name"
          value={formik.values.last_name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="last_name"
        />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700">Email : </label>
        <input
          class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          type="text"
          name="email"
          id="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="email"
        />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700">Phone Number : </label>
        <input
          class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          type="number"
          name="phone_number"
          id="phone_number"
          value={formik.values.phone_number}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="phone_number"
        />
      </div>
			<div>
        <label class="block text-sm font-medium text-gray-700">Hire Date : </label>
        <input
          class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          type="date"
          name="hire_date"
          id="hire_date"
          value={formik.values.hire_date}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="hire_date"
        />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700">Job ID : </label>
        <input
          class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          type="number"
          name="job_id"
          id="job_id"
          value={formik.values.job_id}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="job_id"
        />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700">Salary : </label>
        <input
          class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          type="number"
          name="salary"
          id="salary"
          value={formik.values.salary}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="salary"
        />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700">Manager ID : </label>
        <input
          class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          type="number"
          name="manager_id"
          id="manager_id"
          value={formik.values.manager_id}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="manager_id"
        />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700">Department ID : </label>
        <input
          class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          type="text"
          name="department_id"
          id="department_id"
          value={formik.values.department_id}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="department_id"
        />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700">Profile : </label>
        <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <div class="space-y-1 text-center">
            {
              uploaded === false ?
                <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                	<path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              :
              <>
                <img src={previewImg} alt='image' />
                <span class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500" onClick={onClearImage}>Remove</span>
              </>
            }

            <div class="flex text-sm text-gray-600">
              <label for="profile" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                <span>Upload a file</span>
                <input id="profile" name="profile" type="file" accept='image/*' onChange={uploadOnChange('file')} class="sr-only" />
              </label>
              <p class="pl-1">or drag and drop</p>
            </div>
            <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>
      </div>
    	<div>
        <button type='submit' className="cursor-pointer inline-flex justify-center py-2 px-2 shadow-sm text-sm font-medium rounded-md text-indigo-500 hover:text-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={formik.handleSubmit}> Simpan </button>
        <button className="cursor-pointer inline-flex justify-center py-2 px-2 shadow-sm text-sm font-medium rounded-md text-indigo-500 hover:text-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => props.setDisplay(false)}> Cancel </button>
      </div>
    </div>
  )
}