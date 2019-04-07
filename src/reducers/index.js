import { combineReducers } from 'redux'
import login from './login.js'
import employee from './employee.js'
import replacementInfo from './replacementInfo.js'
import tireModel from './tireModel.js'
import truckModel from './truckModel.js'
import addTruck from './addTruck.js'
import truckTire from './truckTire.js'

export default combineReducers({
    employee,
    login,
    replacementInfo,
    tireModel,
    truckModel,
    addTruck,
    truckTire
})