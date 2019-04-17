import { combineReducers } from 'redux'
import login from './login.js'
import employee from './employee.js'
import replacementInfo from './replacementInfo.js'
import tireModel from './tireModel.js'
import truck from './truckModel.js'
import addTruck from './addTruck.js'
import truckTire from './truckTire.js'
import tireVendor from './tireVendor.js'
import purchaseInfo from './purchaseInfo.js'

export default combineReducers({
    employee,
    login,
    replacementInfo,
    tireModel,
    truck,
    addTruck,
    truckTire,
    tireVendor,
    purchaseInfo
})