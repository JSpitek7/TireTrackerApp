export function userLogin() {
    return {
        type: 'USER_LOGIN'
    }
}
export function userLogout() {
    return {
        type: 'USER_LOGOUT'
    }
}
export function updateUsername(username) {
    return {
        type: 'UPDATE_USERNAME',
        username: username
    }
}
export function updatePassword(password) {
    return {
        type: 'UPDATE_PASSWORD',
        password: password
    }
}
export function requestLogin() {
    return {
        type: 'REQUEST_LOGIN'
    }
}
export function receiveLogin(json) {
    return {
        type: 'RECEIVE_LOGIN',
        employee: json
    }
}
export function requestModels() {
    return {
        type: 'REQUEST_MODELS'
    }
}
export function receiveModels(json) {
    return {
        type: 'RECEIVE_MODELS',
        models: json
    }
}
export function requestTruckModels() {
    return {
        type: 'REQUEST_TRUCK_MODELS'
    }
}
export function receiveTruckModels(json) {
    return {
        type: 'RECEIVE_TRUCK_MODELS',
        models: json
    }
}
export function updateMileage(mileage) {
    return {
        type: 'UPDATE_MILEAGE',
        mileage: mileage
    }
}
export function updateIndex(index) {
    return {
        type: 'UPDATE_INDEX',
        index: index
    }
}
export function updateModel(id) {
    return {
        type: 'UPDATE_MODEL',
        model: id
    }
}
export function updateTruckModel(id){
    return{
        type:'UPDATE_TRUCK_MODEL',
        model:id
    }
}
export function updateLicensePlate(licensePlate) {
    return {
        type: 'UPDATE_LICENSE_PLATE',
        licensePlate: licensePlate
    }
}
export function updateTruckLicensePlate(licensePlate) {
    return {
        type: 'UPDATE_TRUCK_LICENSE_PLATE',
        licensePlate: licensePlate
    }
}
export function showAlert() {
    return {
        type: 'SHOW_ALERT'
    }
}
export function hideAlert() {
    return {
        type: 'HIDE_ALERT'
    }
}
export function submitInfo() {
    return {
        type:'SUBMIT_INFO'
    }
}
export function throwError() {
    return {
        type:'THROW_ERROR'
    }
}
export function hideError() {
    return {
        type:'HIDE_ERROR'
    }
}
export function updateTruckTire(index,id) {
    return {
        type: 'UPDATE_TRUCK_TIRE',
        index: index,
        id: id
    }
}
