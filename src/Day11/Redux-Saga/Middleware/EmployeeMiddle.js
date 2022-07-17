import {call,put} from 'redux-saga/effects'
import employeeAPI from '../../../Day09&10/employeeAPI'
import { GetEmployeeSuccess,GetEmployeeFailed,AddEmployeeSuccess,AddEmployeeFailed,DelEmployeeSuccess,DelEmployeeFailed } from '../Action/EmployeeAction'

function* handleGetEmployee(){
  try {
    const result = yield call(employeeAPI.list)
    yield put(GetEmployeeSuccess(result))
  } catch (error) {
    yield put(GetEmployeeFailed(error))
  }
}

function* handleDelEmployee(action){
  const{payload} = action
  try {
    const result = yield call(employeeAPI.deleted,payload)
    yield put(DelEmployeeSuccess(payload))
  } catch (error) {
    yield put(DelEmployeeFailed(error))
  }
}

function* handleAddEmployee(action){
  const {payload} = action
  try {
    const result = yield call(employeeAPI.create,payload)
    yield put(AddEmployeeSuccess(result.data))
  } catch (error) {
    yield put(AddEmployeeFailed(error))
  }
}

export {
  handleGetEmployee,
  handleDelEmployee,
  handleAddEmployee
}