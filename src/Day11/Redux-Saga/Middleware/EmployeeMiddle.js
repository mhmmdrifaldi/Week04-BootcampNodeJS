import {call,put} from 'redux-saga/effects'
import employeeAPI from '../../../Day09&10/employeeAPI'
import { GetEmployeeSuccess, GetEmployeeFailed, GetOneEmployeeSuccess, GetOneEmployeeFailed, AddEmployeeSuccess,AddEmployeeFailed, EditEmployeeSuccess, EditEmployeeFailed, EditNoEmployeeSuccess, EditNoEmployeeFailed, DelEmployeeSuccess,DelEmployeeFailed } from '../Action/EmployeeAction'

function* handleGetEmployee(){
  try {
    const result = yield call(employeeAPI.list)
    yield put(GetEmployeeSuccess(result))
  } catch (error) {
    yield put(GetEmployeeFailed(error))
  }
}

function* handleGetOneEmployee(action){
  const {payload} = action
  try {
    const result = yield call(employeeAPI.findOne,payload)
    yield put(GetOneEmployeeSuccess(result))
  } catch (error) {
    yield put(GetOneEmployeeFailed(error))
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

function* handleEditEmployee(action){
  const {payload} = action
  try {
    const result = yield call(employeeAPI.update, payload)
    yield put (EditEmployeeSuccess(result.data[1]))
  } catch (error) {
    yield put (EditEmployeeFailed(error))
  }
}

function* handleEditNoEmployee(action){
  const {payload} = action
  try {
    const result = yield call(employeeAPI.updateNoFile, payload)
    yield put (EditNoEmployeeSuccess(result.data[1]))
  } catch (error) {
    yield put (EditNoEmployeeFailed(error))
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

export {
  handleGetEmployee,
  handleGetOneEmployee,
  handleAddEmployee,
  handleEditEmployee,
  handleEditNoEmployee,
  handleDelEmployee
}