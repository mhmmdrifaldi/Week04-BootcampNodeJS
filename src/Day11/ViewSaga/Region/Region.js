import React, { useState, useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { GetRegionRequest,DelRegionRequest } from '../../Redux-Saga/Action/RegionAction'

export default function Region() {
  const dispatch = useDispatch()
  const {regions} = useSelector(state => state.regionStated)
    
  useEffect(() => {
    dispatch(GetRegionRequest())
  }, [dispatch])

  const onDelete = async (id) =>{
    dispatch(DelRegionRequest(id))
  }

  return (
    <div className="relative overflow-x-auto -md sm:rounded-lg">
      <div>
        <h1 className='text-center mb-4 text-2xl font-bold'>LIST REGIONS</h1>
      </div>
      <button 
        type="button" 
        className="mb-1 my-2 cursor-pointer inline-flex justify-center py-2 px-5 text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400" 
        onClick=''
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
            <th scope="col" className="px-6 py-3">Region ID</th>
            <th scope="col" className="px-6 py-3">Region Name</th>
            <th scope="col" className="flex justify-center px-6 py-3">Setting</th>
          </tr>
        </thead>
        <tbody className="overscroll-auto md:overscroll-contain">
          {
            regions && regions.map(reg => {
              return (
                <tr key={reg.region_id} className="bg-emerald-50 border border-emerald-100">
                  <td scope="row" className="px-6 py-2 font-medium text-gray-900 dark:text-black whitespace-nowrap">{reg.region_id}</td>
                  <td className="px-6 py-2">{reg.region_name}</td>
                  <td className='flex justify-center py-2'>
                    <button
                      type="button"
                      className="cursor-pointer inline-flex justify-center py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400" 
                      onClick={()=>{
                        if(window.confirm('Delete this record')) {
                          onDelete(reg.region_id)
                        }
                      }}
                    >
                      {
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
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
    </div>
  )
}