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
export function requestAllModels() {
    return {
        type: 'REQUEST_ALL_MODELS'
    }
}
export function receiveAllModels(json) {
    return {
        type: 'RECEIVE_ALL_MODELS',
        models: json
    }
}
export function requestInStockModels() {
    return {
        type: 'REQUEST_IN_STOCK_MODELS'
    }
}
export function receiveInStockModels(json) {
    return {
        type: 'RECEIVE_IN_STOCK_MODELS',
        models: json
    }
}
export function requestTireDeathStatuses() {
    return {
        type: 'REQUEST_TIRE_DEATH_STATUSES'
    }
}
export function receiveTireDeathStatuses(json) {
    return {
        type: 'RECEIVE_TIRE_DEATH_STATUSES',
        statuses: json
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
export function requestTrackedTrucks() {
    return {
        type: 'REQUEST_TRUCKS'
    }
}
export function receiveTrackedTrucks(json) {
    return {
        type: 'RECEIVE_TRUCKS',
        trackedTrucks: json
    }
}
export function requestVendors() {
    return {
        type: 'REQUEST_VENDORS'
    }
}
export function receiveVendors(json) {
    return {
        type: 'RECEIVE_VENDORS',
        vendors: json
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
export function updateTruckId(truckId) {
    return {
        type: 'UPDATE_TRUCK_ID',
        truckId: truckId
    }
}
export function updateOldTireStatus(id) {
    return {
        type: 'UPDATE_OLD_TIRE_STATUS',
        oldTireStatusId: id
    }
}
export function updateTruckLicensePlate(licensePlate) {
    return {
        type: 'UPDATE_TRUCK_LICENSE_PLATE',
        licensePlate: licensePlate
    }
}
export function updateTruckMileage(mileage) {
    return {
        type: 'UPDATE_TRUCK_MILEAGE',
        truckMileage: mileage
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
export function updatePurchaseVendor(vendorId) {
    return {
        type: 'UPDATE_PURCHASE_VENDOR_ID',
        tireVendorId: vendorId
    }
}
export function updatePurchaseModel(modelId) {
    return {
        type: 'UPDATE_PURCHASE_TIRE_MODEL',
        tireModelId: modelId
    }
}
export function updatePurchasePrice(price) {
    return {
        type: 'UPDATE_PURCHASE_PRICE_PER_UNIT',
        tirePurchasePricePerUnit: price
    }
}
export function updatePurchaseQuantity(quantity) {
    return {
        type: 'UPDATE_PURCHASE_QUANTITY',
        tirePurchaseQuantity: quantity
    }
}
