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
export function requestBrands() {
    return {
        type: 'REQUEST_BRANDS'
    }
}
export function receiveBrands(json) {
    return {
        type: 'RECEIVE_BRANDS',
        brands: json
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
export function updateBrand(id) {
    return {
        type: 'UPDATE_BRAND',
        brand: id
    }
}
export function updateModel(id) {
    return {
        type: 'UPDATE_MODEL',
        model: id
    }
}
export function updateVin(vin) {
    return {
        type: 'UPDATE_VIN',
        vin: vin
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
