import { combineReducers } from 'redux'
import login from './login.js'
import employee from './employee.js'
import replacementInfo from './replacementInfo.js'
import tireBrand from './tireBrand.js'
import tireModel from './tireModel.js'

export default combineReducers({
    employee,
    login,
    replacementInfo,
    tireBrand,
    tireModel
})