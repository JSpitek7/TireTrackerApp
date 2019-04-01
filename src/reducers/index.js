import { combineReducers } from 'redux'
import login from './login.js'
import employee from './employee.js'


export default combineReducers({
    employee,
    login
})