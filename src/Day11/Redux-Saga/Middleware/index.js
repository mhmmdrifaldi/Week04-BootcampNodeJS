import {takeEvery, all} from 'redux-saga/effects'
import { handleAddRegion, handleGetRegion, handleDelRegion } from './RegionMiddle'
import { handleGetEmployee, handleGetOneEmployee, handleAddEmployee, handleEditEmployee, handleEditNoEmployee, handleDelEmployee } from './EmployeeMiddle'
import * as ActionTypeRegion from '../Constant/RegionConstant'
import * as ActionTypeEmployee from '../Constant/EmployeeConstant'

function * watchAll(){
  yield all([
    takeEvery(ActionTypeRegion.GET_REGIONS_REQUEST, handleGetRegion),
    takeEvery(ActionTypeRegion.ADD_REGIONS_REQUEST, handleAddRegion),
    takeEvery(ActionTypeRegion.DEL_REGIONS_REQUEST, handleDelRegion),
    takeEvery(ActionTypeEmployee.GET_EMPLOYEE_REQUEST, handleGetEmployee),
    takeEvery(ActionTypeEmployee.GETONE_EMPLOYEE_REQUEST, handleGetOneEmployee),
    takeEvery(ActionTypeEmployee.ADD_EMPLOYEE_REQUEST, handleAddEmployee),
    takeEvery(ActionTypeEmployee.EDIT_EMPLOYEE_REQUEST, handleEditEmployee),
    takeEvery(ActionTypeEmployee.EDITNOFILE_EMPLOYEE_REQUEST, handleEditNoEmployee),
    takeEvery(ActionTypeEmployee.DEL_EMPLOYEE_REQUEST, handleDelEmployee)
  ])
}

export default watchAll