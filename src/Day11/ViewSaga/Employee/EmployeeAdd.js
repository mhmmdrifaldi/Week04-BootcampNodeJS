import React, { useState } from 'react'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { AddEmployeeRequest } from '../../Redux-Saga/Action/EmployeeAction'
import * as Yup from 'yup'

export default function EmployeeAdd(props) {
  const dispatch = useDispatch()
  const [previewImg, setPreviewImg] = useState();
  const [uploaded, setUploaded] = useState(false);
  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      phone_number: '',
			hire_date: undefined,
      job_id: 0,
      salary: 0,
      manager_id: 0,
      department_id: 0,
      emp_profile: undefined
    },

    validationSchema: Yup.object({
      first_name: Yup.string().required(),
      last_name: Yup.string().required(),
      email: Yup.string().required(),
      phone_number: Yup.number().required(),
      hire_date: Yup.date().required(),
      job_id: Yup.number().min(1).required(),
      salary: Yup.number().min(500).required(),
      manager_id: Yup.number().min(1).required(),
      department_id: Yup.number().min(1).required(),
      emp_profile: Yup.mixed().nullable().notRequired()
    }),
    
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

      dispatch(AddEmployeeRequest(payload))
        props.closeAdd();
        window.alert('Data Succesfully Insert')
        props.onRefresh();
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
    <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
      <div>
        <h1 className='text-center mb-4 text-2xl font-bold'>ADD EMPLOYEE</h1>
      </div>
    	<div>
        <label class="my-1 block text-sm font-medium text-gray-700">First Name
          <span className='text-red-600'> * </span>
        </label>
        <input
          class=" focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          type="text"
          name="first_name"
          id="first_name"
          value={formik.values.first_name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="first_name"
        />
        {formik.touched.first_name && formik.errors.first_name ? <span className="mb-2 text-xs text-red-600">{formik.errors.first_name}</span> : null}
      </div>
      <div>
        <label class="my-1 block text-sm font-medium text-gray-700">Last Name
          <span className='text-red-600'> * </span>
        </label>
        <input
          class=" focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          type="text"
          name="last_name"
          id="last_name"
          value={formik.values.last_name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="last_name"
        />
        {formik.touched.last_name && formik.errors.last_name ? <span className="mb-2 text-xs text-red-600">{formik.errors.last_name}</span> : null}
      </div>
      <div>
        <label class="my-1 block text-sm font-medium text-gray-700">Email
          <span className='text-red-600'> * </span>
        </label>
        <input
          class=" focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          type="text"
          name="email"
          id="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="email"
        />
        {formik.touched.email && formik.errors.email ? <span className="mb-2 text-xs text-red-600">{formik.errors.email}</span> : null}
      </div>
      <div>
        <label class="my-1 block text-sm font-medium text-gray-700">Phone Number
          <span className='text-red-600'> * </span>
        </label>
        <input
          class=" focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          type="number"
          name="phone_number"
          id="phone_number"
          value={formik.values.phone_number}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="phone_number"
        />
        {formik.touched.phone_number && formik.errors.phone_number ? <span className="mb-2 text-xs text-red-600">{formik.errors.phone_number}</span> : null}
      </div>
			<div>
        <label class="my-1 block text-sm font-medium text-gray-700">Hire Date
          <span className='text-red-600'> * </span>
        </label>
        <input
          class=" focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          type="date"
          name="hire_date"
          id="hire_date"
          value={formik.values.hire_date}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="hire_date"
        />
        {formik.touched.hire_date && formik.errors.hire_date ? <span className="mb-2 text-xs text-red-600">{formik.errors.hire_date}</span> : null}
      </div>
      <div>
        <label class="my-1 block text-sm font-medium text-gray-700">Job ID
          <span className='text-red-600'> * </span>
        </label>
        <input
          class=" focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          type="number"
          name="job_id"
          id="job_id"
          value={formik.values.job_id}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="job_id"
        />
        {formik.touched.job_id && formik.errors.job_id ? <span className="mb-2 text-xs text-red-600">{formik.errors.job_id}</span> : null}
      </div>
      <div>
        <label class="my-1 block text-sm font-medium text-gray-700">Salary
          <span className='text-red-600'> * </span>
        </label>
        <input
          class=" focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          type="number"
          name="salary"
          id="salary"
          value={formik.values.salary}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="salary"
        />
        {formik.touched.salary && formik.errors.salary ? <span className="mb-2 text-xs text-red-600">{formik.errors.salary}</span> : null}
      </div>
      <div>
        <label class="my-1 block text-sm font-medium text-gray-700">Manager ID
          <span className='text-red-600'> * </span>
        </label>
        <input
          class=" focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          type="number"
          name="manager_id"
          id="manager_id"
          value={formik.values.manager_id}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="manager_id"
        />
        {formik.touched.manager_id && formik.errors.manager_id ? <span className="mb-2 text-xs text-red-600">{formik.errors.manager_id}</span> : null}
      </div>
      <div>
        <label class="my-1 block text-sm font-medium text-gray-700">Department ID
          <span className='text-red-600'> * </span>
        </label>
        <input
          class=" focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          type="number"
          name="department_id"
          id="department_id"
          value={formik.values.department_id}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="department_id"
        />
        {formik.touched.department_id && formik.errors.department_id ? <span className="mb-2 text-xs text-red-600">{formik.errors.department_id}</span> : null}
      </div>
      <div>
        <label class="my-1 block text-sm font-medium text-gray-700">Profile
          <span className='text-red-600'> * </span>
        </label>
          <div class="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
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
              {formik.touched.emp_profile && formik.errors.emp_profile ? <span className="mb-2 text-xs text-red-600">{formik.errors.emp_profile}</span> : null}
            </div>
          </div>
      </div>
      <div className='m-1'>
        <button
          type='submit'
          className="cursor-pointer inline-flex justify-center py-2 px-2 shadow-sm text-sm font-medium rounded-md text-indigo-500 hover:text-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={formik.handleSubmit}
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          Simpan
        </button>
        <button
          className="cursor-pointer inline-flex justify-center py-2 px-2 shadow-sm text-sm font-medium rounded-md text-red-500 hover:text-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          onClick={() => props.setDisplay(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          Cancel
        </button>
      </div>
    </div>
  )
}